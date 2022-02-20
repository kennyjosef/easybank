import React from "react";
import './style.css';
import Logo3 from '../Assest/icon-online.svg';
import Logo4 from '../Assest/icon-budgeting.svg';
import Logo5 from '../Assest/icon-onboarding.svg';
import Logo6 from '../Assest/icon-api.svg';
const ContentB = () => {
    return ( 
        <div className="container">
            <div className="submini"> 
                <h2>Why choose Easybank ? </h2>
                <p>We leverage Open Banking to turn your bank account into 
                your financial hub.</p> 
                <p className="paragr">Control your finances like never before
            </p>

            </div>
            
            <div className="miniContainer">
                <div className="submini">
                    <img src={Logo3} alt="pic"/>
                    <h3>Online Banking</h3>
                    <p>Our modern web and mobile application allow you to keep
                        track of your finances whereever you are in the world.
                    </p>
                </div>
                <div className="submini">
                    <img src={Logo4} alt="pic"/>
                    <h3>Simple Budgeting</h3>
                    <p>See exactly where your money goes each month. Receive notifications when you are
                        close to hiting your limit.
                    </p>
                </div>
                <div className="submini">
                    <img src={Logo5} alt="pic"/>
                    <h3>Fast Onboarding</h3>
                    <p>We don't do branches. Open your account in minutes online and start
                        taking accounr of your finances right away.
                    </p>
                </div>
                <div className="submini">
                    <img src={Logo6} alt="pic"/>
                    <h3>Open API</h3>
                    <p>Manage your savings, investments, pension and much more from one 
                        account. Tracking your money has never been easier.</p>
                </div>

            </div>
        </div>
     );
}
 
export default ContentB ;