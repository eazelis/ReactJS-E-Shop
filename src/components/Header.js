import logo from '../images/logo.png';
import '../css/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';



const Header = (props) => {
    const [isActiveNavbar, setIsActiveNavbar] = useState(false);
    const [isActiveDropDown, setIsActiveDropDown] = useState(false);
    

    return(
    <div className='container'>
    <header>
        <img src={logo} className="App-logo" alt="logo" />

        <div className='stroke'>
            <button onClick={() => setIsActiveNavbar(!isActiveNavbar)}></button>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <ul className={isActiveNavbar ? "navbar active" : "navbar"}>
            <li><Link to="/header">Apie mane</Link></li>
            <li><Link to="/header">Parduotuvė</Link>
                <button onClick={() => setIsActiveDropDown(!isActiveDropDown)}></button>
                <FontAwesomeIcon icon={ faAngleDown }  />
                <ul className={isActiveDropDown ? "submenu active" : "submenu"}>
                    <li><Link to="/header">Apyrankės</Link></li>
                    <li><Link to="/header">Rankinukai</Link></li>
                    <li><Link to="/header">Žvakės</Link></li>
                </ul></li>
            <li><Link to="/header">Krepšelis</Link></li>
        </ul>
    </header>
    </div>
    )
};



export default Header;
/*
// <Link to='/'>HOME</Link>
function Header() {
    return (
    <Route component={Header}>
      <header>
      
          <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <li>Pradžia</li>
                <li>Apie mane</li>
                <li>Parduotuvė</li>
            </ul>
        
      </header>
    </Route>
    );
  }





  if(checkbox.checked === true){
        document.querySelector('header').className = "mobile"
        
    }else{
        document.querySelector('header').remove('mobile');
   }

*/