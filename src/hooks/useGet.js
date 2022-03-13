import {useState, useEffect} from 'react';

const useGet = url => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const fetchResource = async () => {

			try{
				let config = {
					method: 'GET',
					headers:{
						'Accept': 'application/json',
						'Content-Type': 'application/json'	
					}
				}
				
				let res = await fetch(url, config);
				let data = await res.json();
				setData(data);
				setLoading(false);
			}
			catch(error) {
				setLoading(false);	
			}
		}
		fetchResource();

	}, [url]);

	return {data, loading}


}

export default useGet