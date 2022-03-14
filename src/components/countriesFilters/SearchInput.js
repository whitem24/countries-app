import React from 'react';
import FeatherIcon from 'feather-icons-react';

const SearchInput = ({search, handleInput}) => {

const placeholder = "Search for a country...";
    
    return(<div className="element-center-sm element-center-xs input-group p-element-left p-element-left-xs p-element-left-sm p-element-left-md">
                <span className="input-control-icon border-right"><FeatherIcon icon="search" size={16}/></span>
                <input type="text" value={search} onInput={handleInput} className="input-control border-left input-width" placeholder={placeholder}></input>    
           </div>)
    
}

export default SearchInput