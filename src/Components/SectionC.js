import React from "react";
import Logo7 from '../Assest/image-currency.jpg';
import Logo8 from '../Assest/image-restaurant.jpg';
import Logo9 from '../Assest/image-plane.jpg';
import Logo10 from '../Assest/image-confetti.jpg';
const Article = () => {
    return (
        <div className="big_div">
            <div>
                <h2>Latest Article</h2>
            </div>
            <div className="images">
                <div className="sub_images">
                    <img src={Logo7} alt="pic"/>
                    <p>By Claire Robinson</p>
                    <h3>Receive money in any currency with no fees</h3>
                    <p className="child">The world is getting smaller and we're becoming more mobile.
                         So, why should you be fored to only receive money in a single...
                    </p>
                </div>
                <div className="sub_images">
                    <img src={Logo8} alt="pic"/>
                    <p>By Wilson Huston</p>
                    <h3>Treat yourself without worrying about money</h3>
                    <p className="child">
                        our simple budgeting feature allows you to seperate out your spending and
                        set realistic limits each monts. That means you...
                    </p>
                </div>
                <div className="sub_images">
                    <img src={Logo9} alt="pic"/>
                    <p>By Kenny Josef</p>
                    <h3>Take your Easybank card wherever you go</h3>
                    <p className="child">We want you to enjoy your travels. This is why we don't charge any feess
                        on purchase while you are abroad. We will even show you...
                    </p>
                </div>
                <div className="sub_images">
                    <img src={Logo10} alt="pic"/>
                    <p>By Flaire Robinson</p>
                    <h3>Our invite-only Beta accounts are now live!</h3>
                    <p className="child">After a lot of hard work by the whole team, we are excited to launch our closed
                        beta. It's easy to request an invite through this site...
                    </p>
                </div>
            </div>
        </div>
      );
}
 
export default Article;