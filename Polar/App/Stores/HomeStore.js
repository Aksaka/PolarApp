import AsyncStorage from '@react-native-community/async-storage';
import { observable, action } from 'mobx';

import { apiUrl } from '../Assets/Constants';

class HomeStore {
    @observable isLoading = false;
    @observable isConsumerIdLoaded = false;
    @observable isConsumerInfoLoaded = false;
    @observable consumerInfo = null;
    @observable consumerId = null;

	@action getConsumerId = async () => {
		this.isLoading = true;
		this.isConsumerInfoLoaded = false;

		return AsyncStorage.getItem('consumerId')
			.then(res => {
				this.isLoading = false;
				if(res){
					this.consumerId = parseInt(res);
					this.isConsumerIdLoaded = true;
					return Promise.resolve(this.consumerId);
				}
				else{
					return Promise.reject("CONSUMERID_MISSING");
				}
		}, error => {
			this.isLoading = false;
			console.log(error);
		});
	};

	@action loadConsumerInfo = async(consumerId) => {
		this.isLoading = true;
		this.isConsumerInfoLoaded = false;
		
		let queryParams = `?consumerId=${consumerId}`;
		console.log(`consumerID: ${consumerId}`)
		return fetch(`${apiUrl}api/polar/consumer${queryParams}`, {method: "GET"})
		.then(res => {
			if(res.ok && res.status === 200){
				return res.json();
			}
			else{
				return Promise.reject(new Error("consumerId를 불러오는데 실패했습니다."));
			}
		}).then(res => {
			if(res.length > 0){
				this.consumerInfo = res[0];
				this.isLoading = false;
				this.isConsumerInfoLoaded= true;
				return Promise.resolve(res[0]);
			}
			else{
				return this.createConsumer();
			}
			
		}).catch(error => {
			this.isLoading = false;
			if(error){
				console.log(error);
			}
		});
	};
	
	@action createConsumer=async() =>{
		this.isLoading= true;
		this.isConsumerIdLoaded=false;
		this.isConsumerInfoLoaded = false;
		
		return fetch(`${apiUrl}api/polar/consumer`,{method: "POST"}).then(res => {
			if(res.ok && res.status === 200) {
				return res.json();
			}
			else{
				return Promise.reject(new Error("Consumer를 생성하는데 실패했습니다."));
			}
		}).then(res =>{
			if(res) {
				this.consumerInfo= res;
				this.sellerId = res.insertId;
				return AsyncStorage.setItem('sellerId', String(this.sellerId));
			}
			else{
				return Promise.reject(new Error("UnExpected Error"));
			}
		}).then(res => {
			this.isLoading = false;
			this.isConsumerIdLoaded = true;
			this.isConsumerInfoLoaded = true;
			
			return Promise.resolve(this.consumerInfo);
		}).catch(error => {
			this.isLoading = false;
			if(error){
				console.log(error);
			}
		});
	};


};

export default HomeStore;