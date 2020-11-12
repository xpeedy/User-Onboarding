import React from "react"
import schema from "../Validation/schema"
import * as yup from "yup"
import {useState, useEffect} from "react"
import axios from "axios"

const initialValues = {
    name: "",
    email: "",
    password: "",
    termsOfService: false,
  }
  
  const initialErrors  = {
    name: "",
    email: "",
    password: "",
    termsOfService: "",
  }


export default function Form(prop){
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);

    function Change(e) {
        const correctValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        function validate(){
            yup
            .reach(schema,e.target.name)
            .validate(correctValue)
            .then((res) => {
                setErrors({...values,[e.target.name] : ""})
                console.log(res)
            })
            .catch((err) => {
                setErrors({...errors,[e.target.name]: err.message})
            })
        }
        validate()        
        setValues({...values,[e.target.name]: correctValue})

    }

    function Submitting(e){
        e.preventDefault()
        axios
        .post(`https://reqres.in/api/users`, values)
        .then((res) => {
            prop.userfunc(res.data);
            console.log(res)
            setValues(initialValues);
        })
        .catch((err) => {
            console.log(err)
        })
    }
    //not working
    function isDisabled(){
        return !values.name.trim() || !values.email.trim() || !values.password.trim()
      }

    return(
        <form onSubmit={Submitting}>
            <label>Name
                <input type="text" name="name" value={values.name} onChange={Change}/>
            </label>
            {errors.name ? <div>{errors.name}</div> : ""}
            <br/>
            <label>Email
                <input type="email" name="email" value={values.email} onChange={Change}/>
            </label>
            {errors.email ? <div>{errors.email}</div> : ""}
            <br/>
            <label>Password
                <input type="password" name="password" value={values.password} onChange={Change}/>
            </label>
            {errors.password ? <div>{errors.password}</div> : ""}
            <br/>
            <label>Terms of service
                <input type="checkbox" name="termsOfService" checked={values.termsOfService} onChange={Change}/>
            </label>
            {errors.termsOfService ? <div>{errors.termsOfService}</div> : ""}
            <br/>
            <button id="submitBtn" disabled={isDisabled()}>Submit</button>
        </form>

    )
}