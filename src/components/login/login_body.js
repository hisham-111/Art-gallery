import "./login_body.css";
import React from "react";
import axios from "axios";
import cookie from "react-cookies";

class LoginBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user: [],
      err: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_URL}/user/login`, {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        cookie.save("user", JSON.stringify(response.data.user), {
          maxAge: 5 * 60 * 60 * 1000,
        });
        cookie.save("auth_token", response.data.token, {
          maxAge: 5 * 60 * 60 * 1000,
        });
        if (response.data.user.role === "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
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
    let err = this.state.err;
    return (
      <div className="login_form">
        <h1>Login</h1>
        {err !== "" ? <p className="login-err">{err}</p> : ""}
        <form onSubmit={this.handleSubmit}>
          <div className="login_input_container">
            <label className="login_label">Email </label>
            <input
              className="login_Input"
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="login_input_container">
            <label className="login_label">Password </label>
            <input
              className="login_Input"
              type="password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="login_button_container">
            <input className="login_button" type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginBody;
