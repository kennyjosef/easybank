import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo1 from "../Assest/logo.svg";
import classes from './sign.module.css';
class SignIn extends Component{
    state={
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleChangeFirstName=(e)=>{
        this.setState({
            firstName:e.target.value
        });
    }
    handleChangeLastName=(e)=>{
        this.setState({
            lastName:e.target.value
        })
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
    handleChangePhone=(e)=>{
        this.setState({
            phone:e.target.value
        });
    }
    handleSubmit=(e)=>{
        alert(`Welcome ${this.state.firstName}, You may now login`)
        e.preventDefault();
        console.log('form submmitted by', this.state )
    }


    render(){
        return ( 
            <div className={classes.generals}>
                <div>
                    <img src={Logo1} alt='pic'/>
                </div>
                <div className={classes.form}>
                    <h2>Create Free Account</h2>
                    <p>Please enter your user information</p>
                    <form action='/signup' className={classes.form} onSubmit={this.handleSubmit}>

                        <label htmlFor='firstName'></label>
                        <input className={classes.email} 
                        type="text" id="firstName" onChange={this.handleChangeFirstName}
                        placeholder="  First Name" required/>
                        
                        <label  htmlFor='lastName'></label>
                        <input className={classes.email} 
                        type="text" id="lastName" onChange={this.handleChangeLastName}
                        placeholder="  Last Name" required/>

                        <label htmlFor='email'></label>
                        <input className={classes.email} 
                        type="email" id="email" onChange={this.handleChangeEmail}
                        placeholder="  Email" required/>

                        <label htmlFor='password'></label>
                        <input  className={classes.email}
                        type="password" id="password" onChange={this.handleChangePassword}
                        placeholder="  Password" required/>

                        <label htmlFor='phone'></label>
                        <input  className={classes.email} 
                        type="text" id="phone" onChange={this.handleChangePhone}
                        placeholder="  Phone Number" required/>
                        <button>Create My Account</button>
                    </form>
                </div>
    
                <p>Already a member? 
                    <Link to='/signup'>
                  <span> Login Here.</span> 
                    </Link>   
                </p>
            </div>
         );
    }
} 
    
export default SignIn;