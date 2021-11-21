import React from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom'
import About from "./About";
import Home from "./Home";
import services from "./Services"

export default function ReactRoutingExample() {
    return (
        
        <Router>
    
        <div>
        <ul>
                <Link to="/about">
                    <li>home</li>
                </Link>
             </ul> 
             </div>      
        <Routes>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component ={About}/>
            <Route  path ="/services" component ={services}/>

        </Routes>
       </Router> 
    )
}
            
                
        
