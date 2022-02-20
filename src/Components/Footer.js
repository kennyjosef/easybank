import React from "react";
import Button from "./Button";
import Logo11 from "../Assest/foot.svg";
import Logo12 from "../Assest/logo12.svg";
import Logo13 from "../Assest/logo13.svg";
import Logo14 from "../Assest/logo14.svg";
import Logo15 from "../Assest/logo15.svg";
import Logo16 from "../Assest/logo16.svg";

const Footer = () => {
    return ( 
        <div className="foot">
            <div className="footItem">
                <div className="footItem1">
                    <div>
                        <img src={Logo11} alt="pic"/>
                    </div>
                    <div  className="img">
                        <img src={Logo12} alt="pic"/>
                        <img src={Logo13} alt="pic"/>
                        <img src={Logo14} alt="pic"/>
                        <img src={Logo15} alt="pic"/>
                        <img src={Logo16} alt="pic"/>
                    </div>
                </div>
                <div>
                    <ul className="footul">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    
                </div>
                <div>
                    <ul className="footul">
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Private Policy</a></li>
                    </ul>
                </div>

            </div>
            <div className="footItems">
                <Button/>
                <p> &copy; Easybank. All Rights Reserved</p>
            </div>
        </div>
     );
}
 
export default Footer;