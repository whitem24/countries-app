import React, {useState} from 'react';
import List from './List';
import Loading from '../../components/Loading';
import useGet from '../../hooks/useGet';
import baseUrl from '../../config/baseUrl';

const ShowContainer = () => {


/* All countries endpoint url */
let url = `${baseUrl}/all`;

let {data, loading} = useGet(url);

if(loading)
    <Loading/>

return <List 
        />

}

export default ShowContainer