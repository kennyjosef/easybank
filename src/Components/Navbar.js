import React from "react";
import Button from "./Button";
import Logo1 from "../Assest/logo.svg";
import classes from './style.css';
const Navbar = () => {
    return ( 
      <nav className={classes.overall}>
          <div className="flex">
              <div>
                  <img src={Logo1} alt="logo"/>
              </div>
              <div className={classes.link}>
                  <ul className="forul">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                  </ul>
              </div>
              <div>
                  <Button/>
              </div>
          </div>
      </nav>
     );
}
 
export default Navbar;