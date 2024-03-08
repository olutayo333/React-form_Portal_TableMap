import React from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";

let detail;
const FormikForm = () => {
    let formik = useFormik({
        initialValues: { firstname: "", lastname: "",  password: "", email:"" },
        onSubmit:(values)=>{ console.log(values);},
        validationSchema: Yup.object({ 
            firstname: Yup.string("only text please").required("This field is required").min(3, "Enter a valid name"),
            lastname: Yup.string().required("This is field is required").min(3, "Must be at least three character."),
            email: Yup.string().required("you must fill this field").email('must be an email'),
            password: Yup.string().required("this field is required"),
            age: Yup.number().max(2, "enter a valid age")
        }) 
         
    })
//    console.log(formik.values);
   // console.log(formik.errors)
    return (
    <>
        <div>  
            <form action='' onSubmit={formik.handleSubmit}>
                <input 
                 className={formik.touched.firstname && formik.errors.firstname? "form-control my-2 is-invalid" : "form-control"}
                    // style={formik.touched.firstname && formik.errors.firstname? {borderColor:"red"}: {borderColor:"blue"}}
                    type='text' 
                    placeholder='First Name'
                    onChange={formik.handleChange}
                    name="firstname" 
                    value={formik.values.firstname} //for 2 way binding
                    onBlur={formik.handleBlur}
                    /> <small style={formik.touched.firstname && formik.errors.firstname? {color:"red"}:{color:"blue"} } >{ formik.touched.firstname && formik.errors.firstname }</small>

                <input className={formik.touched.lastname && formik.errors.lastname? "is-invalid" : "form-control"}
                    type='text' 
                    placeholder='Last Name' 
                    onChange={formik.handleChange}
                    name="lastname"
                    value={formik.values.lastname} //for 2 way binding
                    onBlur={formik.handleBlur}
                    /> <small style={{color:"red"}} >{formik.touched.lastname && formik.errors.lastname}</small>
                     
                 <input     className={formik.touched.email && formik.errors.email? "is-invalid" : "form-control"}
                type='email' 
                placeholder='Email' 
                onChange={formik.handleChange}
                name="email"
                value={formik.values.email} //for 2 way binding
                onBlur={formik.handleBlur}
                /> <small style={{color:"red"}}>{formik.touched.email &&formik.errors.email}</small>
                    
                <input  className={formik.touched.password && formik.errors.password? "is-invalid" : "form-control"}
                    type='password' 
                    placeholder='Password' 
                    onChange={formik.handleChange}
                    name='password'
                    value={formik.values.password} //for 2 way binding
                    onBlur={formik.handleBlur}
                    /><small style={{color:"red"}}>{formik.touched.password && formik.errors.password}</small>

                <input  className={formik.touched.age && formik.errors.age? "is-invalid" : "form-control"}
                    type='number' 
                    placeholder='age' 
                    onChange={formik.handleChange}
                    name='age'
                    value={formik.values.age} //for 2 way binding
                    onBlur={formik.handleBlur}
                    /><small style={{color:"red"}}>{formik.touched.age && formik.errors.age}</small>
                
                <button type='submit'> SignUP </button>
            </form>
            <p> {detail}</p>
        </div>

            </>
  )
}

export default FormikForm
