import React from "react";
import Jogging from "./Images/contact-img.jpg"
import {useFormik} from "formik"
import { Schema } from "./Schema/Index";


function ContactUs (){

    const initialValues={
        Name:'',
        Email:'',
        Password:'',
        Address:'',
    }
const {errors,values,handleBlur,handleChange,handleSubmit,touched}=useFormik({
    initialValues:initialValues,
    validationSchema:Schema,
    onSubmit:((values,action)=>{
        console.log(values)
        action.resetForm()
    })
    
})
    return(<>
        <div className="contact_main row ">
            <div className="left_contact_main col-5 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <div className=" left_contact_img_div row">
               <img className="jog_img col-12 img-fluid" alt="jogging" src={Jogging}></img>
               </div>
            </div>


            <div className="right_contact_main col-7 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                <div className="right_contact_head_div">
                    <h1 className="right_contact_head text-light">CONTACT US</h1>
                </div>
                <div>



                    <form onSubmit={handleSubmit} className="row d-flex flex-direction-column justify content-evenly">
                        <div className="input_div">
                            <input onBlur={handleBlur} onChange={handleChange} value={values.Name} id='name' name="Name" className="input1" type="text" placeholder="Name"></input>
                            
                        </div>
                        {errors.Name&&touched.Name?(<small className="text-danger">{errors.Name}</small>):null}
                        <div  className="input_div">
                            <input onBlur={handleBlur} onChange={handleChange} value={values.Email} id="email" name="Email" className="input2" type="text" placeholder="Email"></input>
                        </div>
                        {errors.Email && touched.Email ?  (<small className="text-danger">{errors.Email}</small>):null}
                        
                        <div className="input_div">
                            <input onBlur={handleBlur} onChange={handleChange} value={values.Password} id="password" name="Password" className="input3" type="text" placeholder="PassWord"></input>
                        </div>
                        {errors.Password && touched.Password ? (<small className="text-danger">{errors.Password}</small>):null}
                        
                        <div className="input_div">
                            <input onBlur={handleBlur} onChange={handleChange} value={values.Address} id="confirm_password" name="Address" className="input4" type="text" placeholder="Address"></input>
                        </div>
                        {errors.Address && touched.Address? ( <small className="text-danger">{errors.Address}</small>) : null}
                    
                        <div className="submit_button_div d-flex justify-content-end">
                            <button type="submit" className=" submit btn">Send</button>
                        </div>
                    </form>




                </div>
            </div>
        </div>
        
       
    </>)
}

export default ContactUs;