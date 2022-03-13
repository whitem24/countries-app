import React from 'react';
import List from './List';
import Loading from '../../components/Loading';
import useGet from '../../hooks/useGet';
import baseUrl from '../../config/baseUrl';

const ListContainer = () => {

const {data, loading} = useGet(`${baseUrl}/all`);

if(loading)
    <Loading/>

return <List data = {data}/>

}

export default ListContainer