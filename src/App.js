import React, { useState } from "react";
import Form from "./Form";
import FormData from "./FormData";

const App = () => {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    return (
        <div>
            <Form data={state} setData={setState} />
            <FormData formData={state} />
        </div>
    )

}
export default App