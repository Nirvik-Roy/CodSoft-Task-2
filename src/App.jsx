import React from "react";
import {BrowserRouter, NavLink, Route, Routes,} from 'react-router-dom'
import Home from "./Home";
import WhyUS from './WhyUs'
import Trainers from './Trainers'
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import Footer from "./Footer";


function App(){
    return(<>
       <BrowserRouter>
       <div className="hero_main1">
       <Navbar/>
       </div>
         
        <Routes>
            <Route  path="/" element={<Home/>}></Route>
            <Route  path="/whyus" element={<WhyUS/>}></Route>
            <Route  path="/trainers" element={<Trainers/>}></Route>
            <Route  path="/contactus" element={<ContactUs/>}></Route>
        </Routes>
        <Footer/>
       </BrowserRouter> 
    </>)
}

export default App;