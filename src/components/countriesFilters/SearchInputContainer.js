import React, {useState} from 'react';
import SearchInput from './SearchInput';

const SearchInputContainer = () => {

    /* Creating search input state */
    const [search, setSearch] = useState('');
    
    /* handle input arrow function to set the search input everytime we type on it */
    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    /* Returning the search input layout on render */
    return <SearchInput
                handleInput={handleInput}
                search={search}
           />
    
}

export default SearchInputContainer