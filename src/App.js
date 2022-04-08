import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={Home}/>  
          </Routes>
        <Footer/>
      </Router>
    </div>
   
    
  );
}

export default App;
