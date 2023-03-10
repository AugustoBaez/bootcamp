import React, { useState } from "react";
import './App.css'

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    return (
        <div className="container">
            <form>
                <div className="form">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form">
                    <label htmlFor="email">Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form">
                    <label htmlFor="password">Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form">
                    <label htmlFor="confirmPassword">Confirm password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
            </form>
            <p id="formData">Your Form Data</p>
            <div className="data">
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm password: {confirmPassword}</p>
            </div>
        </div>
    )
}
export default Form