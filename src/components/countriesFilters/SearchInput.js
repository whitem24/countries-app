import React from 'react';
import FeatherIcon from 'feather-icons-react';

const SearchInput = ({search, handleInput}) => {

    return(<div className="input-group p-element-left p-element-left-xs p-element-left-sm p-element-left-md element-center-md element-center-sm element-center-xs">
                <span className="input-control-icon border-right"><FeatherIcon icon="search" size={16}/></span>
                <input type="text" value={search} onInput={handleInput} className="input-control border-left"></input>    
           </div>)
    
}

export default SearchInput