import React, { useState } from "react";
import { NavLink} from "react-router-dom";

function Navbar(){
     
    const [active1,setactive1]=useState(true);
    const [active2,setactive2]=useState(false);
    const [active3,setactive3]=useState(false);
    const [active4,setactive4]=useState(false)
    const active_1=()=>{
      setactive1(true)
      setactive2(false)
      setactive3(false)
      setactive4(false)
    }
    const  active_2=()=>{
        setactive1(false)
        setactive2(true)
        setactive3(false)
        setactive4(false)
    }
     const active_3=()=>{
      setactive1(false)
      setactive2(false)
      setactive3(true)
      setactive4(false)
     }
     const active_4=()=>{
      setactive1(false)
      setactive2(false)
      setactive3(false)
      setactive4(true)
     }
    
   

    return(<>
           <nav className="navbar navbar-expand-lg navbar-light  row text-center">
  <div className="container-fluid col-11">
    <a className="navbar-brand" href="#"><strong className="text-light fs-3">NEOGYM</strong></a>
    <button className="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink onClick={active_1} id="nav" className={ `nav-link active text-light fs-5  ${active1? "active1":"hover1"}`} aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={active_2} id="nav1" className={`nav-link active text-light fs-5  ${active2? "active2" : "hover2"}`} aria-current="page" to="/whyus">WHY US</NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={active_3} id="nav2" className={`nav-link active text-light fs-5  ${active3? "active3" : "hover3"}`} aria-current="page" to='/trainers'>TRAINERS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={active_4} id="nav3" className={`nav-link active text-light fs-5  ${active4? "active4" : "hover4"}`} aria-current="page" to='/contactus'>CONTACT US</NavLink>
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>
    </>)
}

export default Navbar;