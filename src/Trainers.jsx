import React from "react";
import Trainer1 from "./Images/t1.jpg"
import Trainer2 from "./Images/t2.jpg"
import Trainer3 from "./Images/t3.jpg"
import Facebook from "./Images/facebook-logo.png"
import Twitter from "./Images/twitter.png"
import Instagram from "./Images/instagram-logo.png"

function Trainers(){
    return(<>
        <div className="trainers_main">
            <div className="trainers_head_div">
                <h1 className="trainers_heading text-center">OUR GYM TRAINERS</h1>
            </div>
     
            <div className=" trainers_main2 row d-flex justify-content-evenly mt-5">
                 <div className="left_trainer col-3 col-sm-10 col-md-3 col-lg-3 col-xl-3">
                    <h4 className="left_head text-light text-center">Smirth Jon</h4>
                    <div className="mt-4 d-flex align-items-center justify-content-center">
                        <img src={Trainer1} className="trainer_img" alt="trainer1"></img>
                    </div>
                    <div className="d-flex justify-content-center social_media_main">
                        <div className="social_media_div d-flex justify-content-evenly align-items-center">
                            <div>
                            <img className="facebook_img" src={Facebook}></img>
                            </div>
                            <div>
                            <img className="twitter_img" src={Twitter}></img>
                            </div>
                            <div>
                            <img className="instagram_img" src={Instagram}></img>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="center_trainer col-3 col-sm-10 col-md-3 col-lg-3 col-xl-3 ">
                 <h4 className="center_head text-light text-center">Jean Doe</h4>
                    <div className="mt-4 d-flex align-items-center justify-content-center">
                        <img src={Trainer2} className="trainer_img" alt="trainer1"></img>
                    </div>
                    <div className="d-flex justify-content-center social_media_main">
                        <div className="social_media_div d-flex justify-content-evenly align-items-center">
                        <div>
                            <img className="facebook_img" src={Facebook}></img>
                            </div>
                            <div>
                            <img className="twitter_img" src={Twitter}></img>
                            </div>
                            <div>
                            <img className="instagram_img" src={Instagram}></img>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="right_trainer col-3 col-sm-10 col-md-3 col-lg-3 col-xl-3">
                 <h4 className="right_head text-light text-center">Alex Den</h4>
                    <div className="mt-4 d-flex align-items-center justify-content-center">
                        <img src={Trainer3} className="trainer_img" alt="trainer1"></img>
                    </div>
                    <div className="d-flex justify-content-center social_media_main">
                        <div className="social_media_div d-flex justify-content-evenly align-items-center">
                        <div>
                            <img className="facebook_img" src={Facebook}></img>
                            </div>
                            <div>
                            <img className="twitter_img" src={Twitter}></img>
                            </div>
                            <div>
                            <img className="instagram_img" src={Instagram}></img>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>

                 
            
            
        </div>
    </>)
}

export default Trainers;