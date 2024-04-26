import * as Yup from 'yup'

export const Schema = Yup.object({
    Name:Yup.string().min(2).max(25).required("*Plz Enter Your Name"),
    Email:Yup.string().email().required('*Plz Enter Your Email'),
    Password:Yup.string().min(6).required("*Plz Enter Your Password"),
   Address:Yup.string().required("*Plz Provide Your Address")
})