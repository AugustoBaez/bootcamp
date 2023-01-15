import React from "react";

const FormData = (props) => {

    const {firstName, lastName, email, password, confirmPassword} = props

    return (
        <div>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm password: {confirmPassword}</p>

        </div>
    )
}
export default FormData