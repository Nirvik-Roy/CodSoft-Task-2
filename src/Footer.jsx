import React from "react";
import Location from "./Images/location-white.png"
import Mail from "./Images/envelope-white.png"
import Phone from "./Images/telephone-white.png"

function Footer(){
    return(<>
        <div className="footer_main row d-flex justify-content-evenly">
            <div className="left_footer_icon_div col-2 mt-5">
                <div className="d-flex justify-content-center mt-5">
                    <img src={Location}></img>
                </div>
                <div>
                    <h4 className=" location text-center text-light mt-3">Location</h4>
                </div>
            </div>
            <div className="left_footer_icon_div col-2 mt-5">
            <div className="d-flex justify-content-center mt-5">
                    <img src={Phone}></img>
                </div>
                <div>
                    <h4 className=" number text-center text-light mt-3">+02 1234567890</h4>
                </div>
            </div>
            <div className="left_footer_icon_div col-2 mt-5">
            <div className="d-flex justify-content-center mt-5">
                    <img src={Mail}></img>
                </div>
                <div>
                    <h4 className=" mail text-center text-light mt-3">@Mail</h4>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;