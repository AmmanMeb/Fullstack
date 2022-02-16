import FrontPage from './components/frontPageComponents/frontPage';
import SubmitPage from './components/submitPageComponents/submitPage';
import {
  Routes,
  Route
} from "react-router-dom"; 
import React, { Component } from 'react';
import './App.css';

const App = () =>{
 
    return (       
      <div className="app">
        <Routes>       
          
            <Route exact path = '/' element={FrontPage}/>
            <Route path="/SignIn" element={SubmitPage}/>    
          
        </Routes> 
 
      
     </div>
        )
  
        
    
    
}

export default App;
