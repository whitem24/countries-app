import React, {useState, useEffect} from 'react';
import Show from './Show';
import Loading from '../../components/Loading';
import useGetDetails from '../../hooks/useGetDetails';
import baseUrl from '../../config/baseUrl';
import { useParams } from "react-router-dom";

const ShowContainer = () => {

let  { name }  = useParams();

/* Country endpoint url */
let url = `${baseUrl}/name/${name}`;

/* Calling the GET hook */
const {data, loading, borders} = useGetDetails(url);

const [dataBorders, setDataborders] = useState([]);

/* Function to get border countries names*/
const fetchBorders = async (code) => {

    try{
        let config = {
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'	
            }
        }        
        let res = await fetch(`${baseUrl}/alpha/${code}`, config);
        let data = await res.json();
        return data[0].name.common;
    }
    catch(error) {

    }
}

/* Pushing border countries names and setting the dataBorders States*/
useEffect(() => {

    const bordersArray = async () => {
        const res = [];
        if(borders.length>0){
            for (const b of borders) {
                const border = await fetchBorders(b.toLowerCase());
                res.push(border);
            }
            setDataborders(res);
        }
        return res;    
    }
    bordersArray();
}, [borders])

/* While we wait */
if(loading)
    return <Loading/>

return <Show 
            data={data}
            dataBorders={dataBorders}
        />

}

export default ShowContainer