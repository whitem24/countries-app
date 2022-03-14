import React, {useState} from 'react';
import SearchInput from './SearchInput';
import useGet from '../../hooks/useGet';
import Loading from '../../components/Loading';
import baseUrl from '../../config/baseUrl';

const SearchInputContainer = () => {

    /* Creating search input state */
    const [search, setSearch] = useState('');
    const {data, loading} = useGet(`${baseUrl}/name/{${search}}`);
    
    
    /* handle input arrow function to set the search input everytime we type on it */
    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    
    if(loading)
        <Loading/>

    /* Returning the search input layout on render */
    return <SearchInput
                handleInput={handleInput}
                search={search}
                data={data}
           />
    
}

export default SearchInputContainer