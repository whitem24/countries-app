import React, {useState} from 'react';
import List from './List';
import Loading from '../../components/Loading';
import useGet from '../../hooks/useGet';
import baseUrl from '../../config/baseUrl';

const ListContainer = () => {

/* Creating search input state */
const [search, setSearch] = useState('');
/* Creating region filter input state */
const [filterBy, setFilterBy] = useState('');

/* All countries endpoint url */
let url = `${baseUrl}/all`;

/* Calling the GET hook */
const { data, loading } = useGet(url);

/* Function to capitalize search param for better UX at searching */
var toCapital = function toCapital(val) {
    const lowercase = val.toLowerCase();
    return val.charAt(0).toUpperCase() + lowercase.slice(1);
}

/* Function to filter endpoint results if required */
const res = () => {    
    /* Country name filter */
    let resSearch = search!=='' ? data.filter(c => c.name.common.includes(toCapital(search))) : data;
    /* Region filter */
    let resFilter = filterBy!=='' ? resSearch.filter(c => c.region === filterBy) : resSearch;
    return resFilter;
}
let dataFiltered = res();

/* handle input arrow function to set the search input everytime we type on it */
const handleInput = (e) => {
    setSearch(e.target.value);
}

/* handle select arrow function to set the region filter value */
const handleSelect = (e) => {
    setFilterBy(e.target.value);
}

/* While we wait */
if(loading)
    return <Loading/>


return <List data = {dataFiltered}
             handleInput = {handleInput}
             search={search}
             handleSelect = {handleSelect}
             filterBy = {filterBy}
        />

}

export default ListContainer