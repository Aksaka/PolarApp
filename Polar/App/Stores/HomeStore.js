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

export const createConsumer = () => {
	
	const url =`${apiUrl}api/polar/consumer`
	const {data, error, inProgress} = useFetch(url, "POST");
	
	var i=0;
	while(inProgress){
		i=i+1;
		console.log(i)
		if(i>5000)
			{
				break;
			}
	}
	console.log(data?.name);
	
}