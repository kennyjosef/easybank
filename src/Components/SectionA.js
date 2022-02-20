import React from 'react';
import Logo2 from '../Assest/image-mockups.png';
// import Logo2 from '../Assest/bg-intro-mobile.svg';
// import Logo2 from '../Assest/bg-intro-mobile.svg';

import Button from './Button';
import  './style.css';
const Content = () => {
    return ( 
        <div className="section">
            <div className='items'>
                <h3>Next generation digital banking</h3>
                <p>Take your financial life online. Your Easybank account will be
                    a one-stop-shop for spending, saving, budgeting, investing and much more.
                </p>
                <div className='btn'>
                  <Button/>
                </div>
                
            </div>
            <div>
                <img src={Logo2} className="pic" alt="pic"/>
            </div>
        </div>
     );
}
 
export default Content;