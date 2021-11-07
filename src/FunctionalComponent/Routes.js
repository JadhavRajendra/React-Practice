import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom'
import About from "./About";
import Home from "./Home";
import Services from "./Services";

export default function ReactRoutingExample() {
    return (
        <>
    <Router>
        <div>
            <ul>
                <Link to="/about">
                <li> Home</li>
                </Link>
            </ul>
            </div>
   <Routes>
               <Route path="/" exact component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/services" component={Services}/>
           </Routes>
       
        </Router>
    
     </>
    )
}
