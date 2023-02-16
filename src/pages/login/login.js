import React from "react";
import LoginBody from "../../components/login/login_body.js";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <LoginBody />
            </>
        );
    }
}

export default Login;
