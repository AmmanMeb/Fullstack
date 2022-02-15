import FrontPage from './components/frontPageComponents/frontPage';
import SubmitPage from './components/submitPageComponents/submitPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (       
      <div className="app">
      <BrowserRouter> 
        <Routes>       
        
            <Route exact path = '/' component={FrontPage}/>
            <Route path="/SignIn" component={SubmitPage}/>    
          
        </Routes> 
 
      </BrowserRouter> 
     </div>
        )
  }
        
    
    
}

export default App;
