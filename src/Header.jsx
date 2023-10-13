import React from 'react';
import './Header.css';
import Logo from './convoy_logo.png';

/*
  This is for the header of the app
*/
function Header() {
    return (
      <div id="convoyHeader">
          <div id = "logoHolder">
              <img id="convoyLogo" src={Logo} alt="convoy"></img>
          </div>
          <button id="offersHeader"> Offers </button>
          <button id="myJobsHeader"> My Jobs </button>
      </div>
    );
}


export default Header;
