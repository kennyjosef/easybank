import React, { Component } from 'react';
import {MenuItems} from './MenuItem';
import Button from "./Button";
import Logo1 from "../Assest/logo.svg";
import './style.css';
class Navbar extends Component{
    state={clicked:false}
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="navbarItems">
                <div className="flex">
                    <div>
                        <img src={Logo1} alt="pic"/>
                    </div>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                    </div>
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((items, index)=>{
                            return(
                                <li key={index}>
                                    <a className={items.cName} href={items.url}>
                                        {items.title}
                                    </a>
                                </li>
                            )
                        }
                        )} 

                    </ul>
                    <div className='navbtn'>
                    <Button/>
                    </div>
        

                </div>

            </nav>
        )
    }
}
export default Navbar