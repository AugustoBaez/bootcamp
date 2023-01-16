import React, { useState } from "react";
import './App.css'

const Form = props => {

    const {data, setData} = props
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    console.log(data)
    const values = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container">
            <form>
                <div className="form">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" onChange={values} name="firstName"/>
                </div>
                <div className="form">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" onChange={values}  name="lastName"/>
                </div>
                <div className="form">
                    <label htmlFor="email">Email: </label>
                    <input type="text" onChange={values}  name="email"/>
                </div>
                <div className="form">
                    <label htmlFor="password">Password: </label>
                    <input type="text" onChange={values}  name="password"/>
                </div>
                <div className="form">
                    <label htmlFor="confirmPassword">Confirm password: </label>
                    <input type="text" onChange={values}  name="confirmPassword"/>
                </div>
            </form>
            <p id="formData">Your Form Data</p>
        </div>
    )
}
export default Form