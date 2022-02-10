import FrontPage from './components/frontPageComponents/frontPage';
import SubmitPage from './components/submitPageComponents/submitPage';
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (  
      <Router>  
          <div className="App">
          <Route exact path = '/' component={FrontPage}/>
          <Route path="/SignIn" component={SubmitPage}/>
    
          </div>
      </Router> 
        )
  }
        
    
    
}

export default App;
