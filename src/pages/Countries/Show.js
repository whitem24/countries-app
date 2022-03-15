import React from 'react';
import '../../components/styles/Main.css';
import '../../components/styles/Loading.css';
import Navbar from '../../components/navbar/NavbarContainer';
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import FeatherIcon from 'feather-icons-react';

const Show = ({data, dataBorders}) => {
    
const back = "Back";
const notAvailable = "Not available";
let dataRow = data.map((row, rowIdex) => { 
    let population = row.population <=0 ? notAvailable : <CurrencyFormat value={row.population} displayType={'text'} thousandSeparator={true}/>
    let region = row.region ? row.region : notAvailable;
    let subregion = row.subregion ? row.subregion : notAvailable;
    let capital = row.capital ? row.capital[0] : notAvailable; 
    let tld = row.tld[0] ? row.tld[0] : notAvailable;
    let languagesArray = row.languages ? Object.values(row.languages) : null;
    let currenciesArray = row.currencies ? Object.values(row.currencies) : null;
    let nativeArray = row.name.nativeName ? Object.values(row.name.nativeName) : null;
    let native = nativeArray ? nativeArray[nativeArray.length-1].common : notAvailable;
    let currencies = currenciesArray ? currenciesArray.map(c => c.name) : null;
    currencies = currencies ? currencies.join(', ') : notAvailable;
    let languages = languagesArray ? languagesArray.join(', ') : notAvailable;
    let borders = dataBorders.length>0 ? dataBorders.map((c,index) => {
        return(<React.Fragment key={index}>
                    <Link to={c.toLowerCase()} className={"btn"}>{c}</Link>       
              </React.Fragment>
        )
    }) : notAvailable;

    let layout = <React.Fragment key={rowIdex}>                 
                    <div className="flag-grid">
                        <img alt={row.name.common} src={row.flags.png} className="flag flag-md flag-sm flag-xs"/>
                    </div>        
                    <div className="desc-grid">
                        <p className="fw-title fz-title-details margin-title ls-subtitle">{row.name.common}</p>
                        <p className="desc-text-size margin-text ls-subtitle">
                            <span className="desc-text-size desc-text-weight">Native Name: </span>
                            {native}
                        </p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Population: </span>{population}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Region: </span>{region}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Sub region: </span>{subregion}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Capital: </span>{capital}</p>
                    </div>
                    <div className="desc2-grid desc2-grid-sm desc2-grid-xs">
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Top level domain: </span>{tld}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Currencies: </span>{currencies}</p>
                        <p className="desc-text-size margin-text ls-subtitle"><span className="desc-text-size desc-text-weight">Languages: </span>{languages}</p>
                    </div>
                    <div className="border-grid border-grid-sm border-grid-xs">
                        <p className="desc-text-size display-element display-element-sm display-element-xs">
                            <span className="desc-text-size desc-text-weight display-element display-element-sm display-element-xs">Border countries: </span>
                            {borders}
                        </p>
                    </div>

                   
                </React.Fragment>
        return layout
});
return  (<>
            <Navbar/>
            <div className="section">
                <div className="display display-lg display-md display-sm display-xs">
                    <Link to={"/"} className="btn btn-margin btn-padding border-shadow"><FeatherIcon icon="arrow-left" size="13" className="margin-r5"/>{back}</Link>
                </div>
                <div className="grid-container-area grid-container-area-sm grid-container-area-xs">
                   {dataRow}                                
                </div>
            </div>
        </>)
}

export default Show