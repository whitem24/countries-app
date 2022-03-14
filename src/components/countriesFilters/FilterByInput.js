import React from 'react';
import FeatherIcon from 'feather-icons-react';

const FilterByInput = ({filterBy, handleInput, regions}) => {

    let regionSelect = regions.map(r => <option value={r.id}>{r.name}</option>)

    return(<div className="float-right input-group p-element-left p-element-left-xs p-element-left-sm p-element-left-md element-center-md element-center-sm element-center-xs">                
                <select  value={filterBy} onChange={handleInput} className="input-control border-right">
                    {regionSelect}
                </select>   
                <span className="input-control-icon border-left"><FeatherIcon icon="chevron-down" size={16}/></span> 
           </div>)
    
}

export default FilterByInput