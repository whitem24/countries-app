import React, {useState} from 'react';
import FilterByInput from './FilterByInput';

const FilterByInputContainer = () => {

    /* Creating search input state */
    const [filterBy, setFilterBy] = useState(null);
    
    /* handle input arrow function to set the search input everytime we type on it */
    const handleInput = (e) => {
        setFilterBy(e.target.value);
    }

    /* Returning the search input layout on render */
    return <FilterByInput
                handleInput={handleInput}
                filterBy={filterBy}
           />
    
}

export default FilterByInputContainer