import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Logo1 from "../Assest/logo.svg";
import classes from './sign.module.css';
class SignUp extends Component{
    state={
        email: '',
        password: ''
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
        // e.preventDefault();
        console.log('form submmitted by', this.state )
    }

    render(){
        return ( 
            <div className={classes.general}>
                <div>
                    <img src={Logo1} alt="pic"/>
    
                </div>
                <div className={classes.form}>
                    <h2>Sign in to Get Started</h2>
                    <form action="/profile" className={classes.form} onSubmit={this.handleSubmit}>  
                        <label htmlFor="email"></label>
                        <input className={classes.email} 
                        type="email" 
                        onChange={this.handleChangeEmail} 
                        id="email" placeholder="   Email or Phone Number" required/>

                        <label htmlFor="password"></label>
                        <input className={classes.email} 
                        type="text"  onChange={this.handleChangePassword}
                        id="password" placeholder="   Password" required/>

                        <button>LOGIN</button>
                    </form>
    
                </div>
                <Link to='/SignIn'>    
                    <button>
                     Create New Account
                    </button>
                </Link>
            </div>
         );

    }
}
 
export default SignUp;