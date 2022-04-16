import React, { Component } from 'react';
import classes from './contact.module.css';

class Contact extends Component{
    state={
        email: '',
        password: '',
        textarea: ''
    }
    handleChangeTextarea=(e)=>{
        this.setState({
            textarea:e.target.value
        });
    }

    handleChangeEmail=(e)=>{
        this.setState({
            email:e.target.value
        });
    }
    handleChangePassword=(e)=>{
        this.setState({
            password:e.target.value
        });
    
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('comment submmitted by', this.state )
    }
    render(){
        return(
            <div className={classes.container}>
                <div>
                    <h2>Contact Me</h2>
                </div>
                <div className={classes.items}>
                    <div className={classes.flex}>
                        <h3>Get in touch</h3>
                        <div className={classes.para}>
                             <p><strong>Email:</strong> <span>idowukehinde28@gmail.com</span></p>
                             <p><strong>Phone Number:</strong> <span>+2348102191530</span></p>
                        </div>
                        <p className={classes.address}> We are located at Abeokuta Ogun State, Nigeria.</p>
                    </div>
                    <div className={classes.flex2}>
                    <form className={classes.form} onSubmit={this.handleSubmit}>  
                        <div >
                        <label htmlFor="email"></label>
                        <input className={classes.email} 
                        type="email" 
                        onChange={this.handleChangeEmail} 
                        id="email" placeholder="   Email" required/>

                        <label htmlFor="password"></label>
                        <input className={classes.email} 
                        type="password"  onChange={this.handleChangePassword}
                        id="password" placeholder="   Password" required/>
                        </div>
                        <textarea className={classes.text} 
                        onChange={this.handleChangeTextarea}
                        placeholder='comment here'></textarea>
                        <div className={classes.btn}>
                        <button>Send</button>
                        </div>
                        
                    </form>
                    </div>

                </div>

            </div>
        )
    }
} 
export default Contact