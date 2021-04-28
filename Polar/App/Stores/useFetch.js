import {useState, useEffect} from 'react';

import { apiUrl } from '../Assets/Constants';

export const Fetching = URL => {
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
