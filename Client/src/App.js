import FrontPage from './components/frontPageComponents/frontPage';
import SubmitPage from './components/submitPageComponents/submitPage';
import {
  Routes,
  Route
} from "react-router-dom"; 
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (       
      <div className="app">
        <Routes>       
          
            <Route exact path = '/' component={FrontPage}/>
            <Route path="/SignIn" component={SubmitPage}/>    
          
        </Routes> 
 
      
     </div>
        )
  }
        
    
    
}

export default App;
