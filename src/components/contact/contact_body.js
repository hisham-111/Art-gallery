import "./contact_body.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";

class ContactBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            message: "",
            err: "",
            name: [],
            sent: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                let { first_name, last_name } = response.data;
                let name = [first_name, last_name];

                if (response.status === 200) {
                    this.setState({ isLoggedIn: true, name });
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

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "post",
            url: `${process.env.REACT_APP_URL}/contact`,
            data: { message: this.state.message.trim() },
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                auth_token: cookie.load("auth_token"),
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ sent: true });
                }
                console.log(response);
            })
            .catch((error) => {
                if (error.response === undefined) {
                    this.setState({ err: error.message });
                } else {
                    this.setState({ err: error.response.data });
                }
            });
    }

    render() {
        let loggedIn = this.state.isLoggedIn;
        let { err } = this.state;
        let { sent } = this.state;
        let { name } = this.state;
        return (
            <>
                {loggedIn ? (
                    <>
                        {sent ? (
                            <>
                                <h1 className="contact-thanks">Thank you {name.join(" ").replace(/\b\w/g, l => l.toUpperCase())} for your message!</h1>
                            </>
                        ) : (
                            <>
                                <h1 className="contact-title">Contact Us</h1>
                                {err !== "" ? <p className="contact-err">{err}</p> : ""}
                                <form className="contact-form" onSubmit={this.handleSubmit}>
                                    <label className="contact-label" htmlFor="contact-message">
                                        <span className="contact-phrase">
                                            Please type your message below:
                                        </span>
                                    </label>
                                    <textarea
                                        onChange={this.handleChange}
                                        id="contact-message"
                                        className="contact-textarea"
                                        name="message"
                                        minLength={30}
                                        maxLength={1500}
                                        required
                                    />

                                    <button className="contact-button">Send Message</button>
                                </form>
                            </>
                        )}
                    </>
                ) : (
                    <section className="contact-guest">
                        <span>Please </span>
                        <Link to="/register" className="contact-nav-link">
                            Register
                        </Link>
                        <span> or </span>
                        <Link className="contact-nav-link" to="/login">
                            Login
                        </Link>
                    </section>
                )}
            </>
        );
    }
}

export default ContactBody;
