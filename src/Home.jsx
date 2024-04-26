import React from "react";
import Hero from "./Images/hero-bg.jpg";
import WhyUS from "./WhyUs";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Health from "./Health";
import Trainers from "./Trainers";
import ContactUs from "./ContactUs";
import Menu from "./Images/menu.png"
import "./index.css"

function Home() {

  let navigate=useNavigate()
  
  return (
    
    <>
      <div className="hero_main">
     

         <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
          data-bs-ride="carousel"
          
        >
          <div class="carousel-inner">
            <div class="carousel-item active data-bs-interval='100'">
                <div>
                  <h3 className="text-center text-light fitness hero_head1">FITNESS</h3>
                  <h2 className="text-center text-light training hero_head2">TRAINING</h2>
                  <h3 className="text-center text-light neogym hero_head3">NEOGYM</h3>
                </div>
                <div className="row d-flex justify-content-center para_div ">
                  <p className="text-center col-9 text-light para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                </div>
                <div className="d-flex justify-content-center btn_div">
                  <button onClick={()=>{
                    navigate("/contactus")
                  }} 
                  className="btn">CONTACT US</button>
                </div>
            </div>
            <div class="carousel-item data-bs-interval='100'">
                <div>
                  <h3 className="text-center text-light fitness hero_head1">FITNESS</h3>
                  <h2 className="text-center text-light training hero_head2">TRAINING</h2>
                  <h3 className="text-center text-light neogym hero_head3">NEOGYM</h3>
                </div>
                <div className="row d-flex justify-content-center para_div ">
                  <p className="text-center col-9 text-light para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                </div>
                <div className="d-flex justify-content-center btn_div">
                  <button onClick={()=>{
                    navigate("/contactus")
                  }}  className="btn">CONTACT US</button>
                </div>
               
            </div>
            <div class="carousel-item data-bs-interval='100'"> 
                <div>
                  <h3 className="text-center text-light fitness hero_head1 ">FITNESS</h3>
                  <h2 className="text-center text-light training hero_head2">TRAINING</h2>
                  <h3 className="text-center text-light neogym hero_head3">NEOGYM</h3>
                </div>
                <div className="row d-flex justify-content-center para_div ">
                  <p className="text-center col-9 text-light para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                </div>
                <div className="d-flex justify-content-center btn_div">
                  <button onClick={()=>{
                    navigate("/contactus")
                  }}   className="btn ">CONTACT US</button>
                </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          
        </div>
       
      </div>
     
      
      <WhyUS/>
      <Health/>
      <Trainers/>
      <ContactUs/>
    </>
  );
}

export default Home;
