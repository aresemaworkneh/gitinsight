import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import Metrics from "./components/metrics";
import Dashboard from "./components/dashboard";
 const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/metrics" element={<Metrics />} />
       <Route path="/dashboard" element={<Dashboard />} />
       
     </Routes>
   </div>
 );
};
 export default App;