import React from 'react';
import '../../components/styles/Main.css';
import Navbar from '../../components/navbar/NavbarContainer';
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import FeatherIcon from 'feather-icons-react';

const Show = ({data, dataBorders}) => {
const back = "Back";
let dataRow = data.map((row, rowIdex) => { 
    let languagesArray = Object.values(row.languages);
    let currenciesArray = Object.values(row.currencies);
    let nativeArray = Object.values(row.name.nativeName);
    let native = nativeArray[nativeArray.length-1].common;
    let currencies = currenciesArray.map(c => c.name);
    currencies = currencies.join(', ');
    let languages = languagesArray.join(', ');
    let borders = dataBorders.map((c,index) => {
        return(<React.Fragment key={index}>
                    <Link to={c.toLowerCase()} className={"btn"}>{c}</Link>       
              </React.Fragment>
        )
    });

    let layout = <React.Fragment key={rowIdex}>                 
                    <div className="flag-grid"><img alt={row.name.common} src={row.flags.png} className="flag flag-md"></img></div>        
                    <div className="desc-grid">
                        <p className="fw-title fz-title-details margin-title ls-subtitle">{row.name.common}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Native Name: </span>{native}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Population: </span><CurrencyFormat value={row.population} displayType={'text'} thousandSeparator={true}/></p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Region: </span>{row.region}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Sub region: </span>{row.subregion}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Capital: </span>{row.capital ? row.capital[0] : row.capital }</p>
                    </div>
                    <div className="desc2-grid">
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Top level domain: </span>{row.tld[0]}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Currencies: </span>{currencies}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Languages: </span>{languages}</p>
                    </div>
                    <div className="border-grid">
                        <p className="desc-text-size"><span className="desc-text-size desc-text-weight">Border countries: </span>{borders}</p>
                    </div>

                   
                </React.Fragment>
        return layout
});
return  (<>
            <Navbar/>
            <div className="section">
                <div className="display display-lg display-md display-sm display-xs">
                    <Link to={"/"} className="btn btn-margin"><FeatherIcon icon="arrow-left" size="13" className="margin-r5"/>{back}</Link>
                </div>
                <div className="grid-container-area">
                   {dataRow}                                
                </div>
            </div>
        </>)
}

export default Show