import React from "react";
import RegisterBody from "../../components/register/register_body.js";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <RegisterBody />
            </>
        );
    }
}

export default Register;
