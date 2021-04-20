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


export const getConsumerId = async() => {
	
	return new Promise
	AsyncStorage.getItem('sellerId', (err, result) => {
		if (result){
			const UserId = parseInt(result);
		} else{
			Promise.reject("CONSUMERID_MISSING");
		}
		
		if(err){
			console.log(err);
		}
		
	})
}


export const createConsumer = async() => {
	
	const url =`${apiUrl}api/polar/consumer`
	const {data, error, inProgress} = useFetch(url, "POST");
	console.log(String(data?.insertId));
	
	AsyncStorage.setItem('consumerId', String(data?.insertId));
					   
	return new Promise((resolve, reject) =>{
			   
		})
};