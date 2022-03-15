import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';

const NavbarContainer = () => {

    const [toggle, setToggle] = useState(true);
    let body = document.body;
    const title = "Where in the world?";
    
    useEffect(() => {
        if(!localStorage.getItem("mode")){
            body.classList.add("dark");
            localStorage.setItem("mode","dark");
        }else{
            body.classList.add(localStorage.getItem("mode"));
            localStorage.setItem("mode",localStorage.getItem("mode"));
        }
        console.log("evnt")
    }, [])
   
    const handleToggle = () => {
        if(localStorage.getItem("mode") === "dark"){
            body.classList.remove("dark");
            body.classList.add("light");
	        localStorage.setItem("mode","light");

        }else{
            body.classList.remove("light");
            body.classList.add("dark");
	        localStorage.setItem("mode","dark");
        }
        setToggle(!toggle);
    }

    return <Navbar 
                handleToggle={handleToggle}
                title={title}
            />
}

export default NavbarContainer