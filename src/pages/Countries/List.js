import React from 'react';
import '../../components/styles/Main.css';
import '../../components/styles/Loading.css';
import Navbar from '../../components/navbar/NavbarContainer';
import CurrencyFormat from 'react-currency-format';
import SearchInput from '../../components/countriesFilters/SearchInput';
import FilterByInput from '../../components/countriesFilters/FilterByInput';
import { Link } from 'react-router-dom';

const List = ({data, search, filterBy, handleInput, handleSelect}) => {
let countries = <div className="text-center mt-5">No matching records found.</div>;
if(data.length>0){
     countries = data.map((c,index) => {
        let name = c.name.common.toLowerCase();
        let layout = 
                        <div key={index} className={"grid-item bg"}>
                            <Link className="non" to={`/countries/show/${name}`}>
                            <img alt={c.name.common} src={c.flags.png} className="flags"></img>
                            <div className="padding-description">
                                <p className="fw-subtitle fz-subtitle margin-subtitle ls-subtitle">{c.name.common}</p>
                                <p><span className="fw-text">Population: </span><CurrencyFormat value={c.population} displayType={'text'} thousandSeparator={true}/></p>
                                <p><span className="fw-text">Region: </span>{c.region}</p>
                                <p><span className="fw-text">Capital: </span>{c.capital ? c.capital[0] : c.capital }</p>
                            </div>
                            </Link>
                        </div>
                   
        return layout

    });
}

return  (<>
            <Navbar/>
            <div className="section">
                <div className="display display-lg display-md display-sm display-xs">
                    <SearchInput search={search} handleInput={handleInput}/>
                    <FilterByInput filterBy={filterBy} handleSelect={handleSelect}/>
                </div>
                <div className="grid-container">
                    {/* Calling search input filter */}                    
                    {countries}
                </div>
            </div>
        </>)
}

export default List