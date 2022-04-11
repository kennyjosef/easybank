import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/Signup';
import SignIn from './Components/SignIn';
import About from './Components/About';
import Profile from './Components/Profile';
function App() {
  return ( 
    <Router>
    <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/signIn' element={<SignIn/>} />
          <Route exact path='/profile' element={<Profile/>} />

        </Routes>
        <Footer/>     
    </div>
    </Router>
   
    
  );
}

export default App;
