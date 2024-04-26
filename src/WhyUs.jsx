import React from "react";
import quality from './Images/u-1.png'
import diet from './Images/u-2.png'
import time from './Images/u-3.png'
import nutrition from './Images/u-4.png'

function WhyUS(){
    return(<>
        <div className="us_main">
            <div>
                <h2 className="text-center text-light  us_head">WHY CHOOSE US</h2>
            </div>
            <div className="us_main2 row d-flex justify-content-evenly">
                <div className="quality_div quality_div1 col-2">
                    <div className="quality_img d-flex justify-content-center">
                        <img className="img1" src={quality} alt=""></img>
                    </div>
                    <div className="quality_head_div">
                        <h2 className="quality_heading text-center text-light fs-5 ">QUALITY EQUIPMENT</h2>
                    </div>
                    <div className="quality_para_div text-center text-light">
                        <para className='quality_para '>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</para>
                    </div>
                </div>
                <div className="quality_div col-2">
                    <div className="quality_img d-flex justify-content-center">
                        <img className="img2" src={nutrition} alt=""></img>
                    </div>
                    <div className="quality_head_div">
                        <h2 className="quality_heading text-center text-light fs-5">NUTRITION</h2>
                    </div>
                    <div className="quality_para_div text-center text-light">
                        <para className='quality_para'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</para>
                    </div>
                </div>
                <div className="quality_div col-2">
                    <div className="quality_img d-flex justify-content-center">
                        <img className="img3" src={diet} alt=""></img>
                    </div>
                    <div className="quality_head_div">
                        <h2 className="quality_heading text-center text-light fs-5">HEALTY DIET PLAN</h2>
                    </div>
                    <div className="quality_para_div text-center text-light">
                        <para className='quality_para'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</para>
                    </div>
                </div>
                <div className="quality_div col-2">
                    <div className="quality_img d-flex justify-content-center">
                        <img className="img4" src={time} alt=""></img>
                    </div>
                    <div className="quality_head_div">
                        <h2 className="quality_heading text-center text-light fs-5">SPORT TRAINNING</h2>
                    </div>
                    <div className="quality_para_div text-center text-light">
                        <para className='quality_para'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</para>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default WhyUS;