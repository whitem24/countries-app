import {useState, useEffect} from 'react';

const useGetDetails = url => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [borders, setBorders] = useState([]);

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
				setBorders(data[0].borders);
				setLoading(false);
				
			}
			catch(error) {
				setLoading(false);	
			}
		}
		fetchResource();

	}, [url]);

	return {data, loading, borders}


}

export default useGetDetails