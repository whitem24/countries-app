import React from 'react';
import '../../components/styles/Main.css';
import Navbar from '../../components/navbar/NavbarContainer';
import CurrencyFormat from 'react-currency-format';

const List = ({data}) => {
console.log(data);
let countries = data.map(c => {

    let layout = <div className={"grid-item bg"}>
                    <img alt="" src={c.flags.png} className="flags"></img>
                    <div className="padding-description">
                        <p className="fw-subtitle fz-subtitle margin-subtitle ls-subtitle">{c.name.common}</p>
                        <p><span className="fw-text">Population: </span><CurrencyFormat value={c.population} displayType={'text'} thousandSeparator={true}/></p>
                        <p><span className="fw-text">Region: </span>{c.region}</p>
                        <p><span className="fw-text">Capital: </span>{c.capital ? c.capital[0] : c.capital }</p>
                    </div>

                 </div>
    return layout

});

return  (<>
            <Navbar/>
            <div className="section grid-container">
                {countries}
            </div>
        </>)
}

export default List