import React from 'react';
import FeatherIcon from 'feather-icons-react';
import regions from "./Regions";

const FilterByInput = ({filterBy, handleSelect}) => {

    const placeholder = "Filter by region";
    let regionSelect = regions.map((r,index) => <option key={index} value={r.name}>{r.name}</option>)

    return(<div className="element-center-sm element-center-xs float-right input-group p-element-left p-element-left-xs p-element-left-sm p-element-left-md element-center-md element-center-sm element-center-xs">                
                <select  value={filterBy} onChange={handleSelect} className="select-padding input-control border-right select-width">
                    <option value="">{placeholder}</option>
                    {regionSelect}
                </select>   
                <span className="input-control-icon border-left select-padding"><FeatherIcon icon="chevron-down" size={16}/></span> 
           </div>)
    
}

export default FilterByInput