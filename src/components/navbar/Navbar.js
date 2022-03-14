import React from 'react';
import FeatherIcon from 'feather-icons-react';

const Navbar = ({handleToggle, title}) => {

    let navClass = "nav dark-nav";
    let btnClass = "btn-mode text-light fz-text-sm";
    let btnText = "Dark Mode";
    let toggleIcon = "moon";

    if(localStorage.getItem("mode")==="light"){
        navClass = "nav light-nav";
        btnClass = "btn-mode text-dark fz-text-sm";
        btnText = "Light Mode";
        toggleIcon = "sun";
    }
    return (
                <div className={navClass}>
                    <div className="nav-header">
                        <div className="nav-title fw-title fw-title-xs fz-title-sm">
                            {title}
                        </div>
                    </div>                    
                    <div className="nav-links">
                        <FeatherIcon size="11" icon={toggleIcon}/><button className={btnClass} onClick={handleToggle} target="_blank" rel="noreferrer">{btnText}</button>                
                    </div>
                </div>
            )
}

export default Navbar