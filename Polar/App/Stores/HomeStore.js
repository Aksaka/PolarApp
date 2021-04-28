import AsyncStorage from '@react-native-community/async-storage';
import { observable, action } from 'mobx';
import {useState, useEffect} from 'react';

import { apiUrl } from '../Assets/Constants';

function useFetch(URL, METHOD) {
	const [data, setData] = useState(null);
	const [error, setError]= useState(null);
	const [inProgress, setinProgress] = useState(false);
	useEffect( () => {
		const fetchData = async () => {
			try{
				setinProgress(true);
				const res = await fetch(URL, {method: METHOD});
				const result = await res.json();
				
				if(res.ok){
					setData(result);
					setError(null);
				}
				else{
					throw result;
				}
			}
			catch(error){
				setError(error);
			}
			finally{
				setinProgress(false);
			}
		};
	fetchData();
	}, [])
	return {data, error, inProgress};
}

export const getPaymentInfo = consumerId => {
	const url =`${apiUrl}api/polar/payment?consumerId=${consumerId}`;
	const {data, err, inProgress} = useFetch(url, "GET");
	
	return data;
};

export const getConsumerId = async() => {
	const [error, setError] = useState(null);
	const [consumerId, setConsumerId] = useState(null);
	
	const value = await AsyncStorage.getItem('consumerId', (error, result) => {
		
		if(error){
			console.log(error);
			setError(error);
		}
		else{
			setConsumerId(String(result));
			console.log(`result: ${result}`);
		}
	})
	
	return {
		consumerId: consumerId, 
		error: error
	};
};


export const createConsumer = async() => {

	const url =`${apiUrl}api/polar/consumer`
	const {data, err, inProgress} = useFetch(url, "POST");
	
	AsyncStorage.setItem('consumerId', String(data?.insertId), (error) => {
	if(error){
	console.log(error);
	}
	});
	console.log(`consumerId: ${data?.insertId}`);
	
};