import FrontPage from './components/frontPageComponents/frontPage';
import SubmitPage from './components/submitPageComponents/submitPage';
import Header from './components/headerComponents/header'
import {
  Routes,
  Route
} from "react-router-dom"; 
import './App.css';

const App = () =>{
 
    return (       
      <div className="app">
        <Routes>
            <Route  element={<Header/>}/>       
            <Route exact path = '/' element={<FrontPage/> }/>
            <Route path="/SubmitPage" element={<SubmitPage/> }/>    
          
        </Routes> 
 
      
     </div>
        )
  
        
    
    
}

export default App;
