import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Logo2 from '../Assest/image-mockups.png';


import Button from './Button';
import  './style.css';
const Content = () => {
    return ( 
        <div className="section">
            <div className='items'>
                <h3>Next generation digital 
                    <span style={{color:"red", fontWeight:"bold", marginLeft:'10px'}}>
                        <Typewriter
                        loop
                        cursor
                        cursorStyle=''
                        typeSpeed={70}
                        delaySpeed={50}
                        delaySpeed={1000}
                        words={["banking,", "marketing,", "business,", "networking."]}/>
                    </span>
                </h3>
                <p>Take your financial life online. Your Easybank account will be
                    a one-stop-shop for spending, saving, budgeting, investing and much more.
                </p>
                <div className='btn'>
                  <Button/>
                </div>
                
            </div>
            <div className='items2'>
                <img src={Logo2} className="pic" alt="pic"/>
            </div>
        </div>
     );
}
 
export default Content;