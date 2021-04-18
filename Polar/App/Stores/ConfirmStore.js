import {observable, action} from 'mobx';

import {apiUrl} from '../Assets/Constants';

class ConfirmStore{
	@observable isLoading = false;
	@observable paymentState = 0;

	@action setPaymentState = paymentState =>{
		this.paymentState = paymentState;
	}
	
	
	@action refreshPaymentRequest = async(consumerId) => {
		this.isLoading = true;
		let queryParams = `?consumerId=${consumerId}`;
		return fetch(`${apiUrl}api/polar/payment${queryParams}`, {
			method: "GET"
		}).then(res => {
			if(res.ok && res.status === 200){
				return res.json();
			}
			else{
				return Promise.reject(new Error("paymentRequest Load에 실패했습니다."));
			}
		}).then(res => {
			if(res.length > 0){
				this.paymentState = res[0].state;
				this.isLoading = false;
				return Promise.resolve(res[0]);
			}
			else{
				this.createConsumer();
			}
		}).catch(error => {
			this.isLoading = false;
			if(error){
				console.log(error);
			}
		});
		
	};
	
};

export default ConfirmStore;