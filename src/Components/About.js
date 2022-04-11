import React from 'react';
import classes from './sign.module.css'

const About = () => {
    return ( 
        <div className={classes.container}>
            
            <div className={classes.about}>
                <h2>ABOUT EASYBANK</h2>
            </div>
            <div className={classes.section}>
                <div>
                    <h2>WHO WE ARE</h2>
                    <p>
                        We're a sales performance agency. We've been helping businesses drive revenue with the use of
                        inbound marketing and sales enablement tactics since 2012. We're a proud HubSpot Plantinum Partner
                        and pride ourselves on using the best tools to help our clients
                        succeed. <span>Our Team</span> is made up of smart and talented people that are passionate
                        about creating inbound sales results.
                    </p>
                </div>
                <div>
                    <h2>WE'RE DIFFERENT THAN THE REST</h2>
                    <p>
                        We're rooted in sales. Our parents company, <span>The Centre of Sales Strategy (CSS)</span>
                        has been helping sales organisations turn talent into performance for almost 40 years. Unlike other marketing agencies, we are obssessed with ROI and we have the 
                        experience to deliver inbound sales results because we've done it ourselves.
                    </p>
                    <p>

                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default About ;
