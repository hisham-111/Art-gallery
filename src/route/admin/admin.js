import "./admin.css"
import React from "react";
import Dashboard from "../../pages/dashboard/dashboard";
import axios from "axios";
import cookie from "react-cookies";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    componentDidMount() {
        this.isLoggedIn();
    }
    isLoggedIn = () => {
        axios
            .get(`${process.env.REACT_APP_URL}/user/is-logged-in`, {
                headers: { auth_token: cookie.load("auth_token") },
            })
            .then((response) => {
                if (response.data.role === "admin") {
                    this.setState({ isLoggedIn: true });
                } else {
                    this.setState({ isLoggedIn: false });
                }
            })
            .catch((error) => {
                if (error.response === undefined) {
                    this.setState({ isLoggedIn: false });
                } else {
                    this.setState({ isLoggedIn: false });
                }
            });
    };

    render() {
        let loggedIn = this.state.isLoggedIn;
        return <>{loggedIn ? <Dashboard /> : <h1 className="admin-unauthorised">Unauthorised Access!</h1>}</>;
    }
}

export default Admin;
