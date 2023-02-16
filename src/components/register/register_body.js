import "./register_body.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";

class RegisterBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
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
      .post(`${process.env.REACT_APP_URL}/user/register`, {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        role: "user",
      })
      .then((response) => {
        cookie.save("user", JSON.stringify(response.data.user), {
          maxAge: 5 * 60 * 60 * 1000,
        });
        cookie.save("auth_token", response.data.token, {
          maxAge: 5 * 60 * 60 * 1000,
        });

        window.location.href = "/";
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
      <div className="register-wrapper">
        <h2 className="register-title">Sign up for a free account</h2>
        {err !== "" ? <p className="register-err">{err}</p> : ""}
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div className="register-input-box">
            <input
              onChange={this.handleChange}
              className="register-input"
              type="text"
              placeholder="first name"
              name="first_name"
              required
            />
          </div>
          <div className="register-input-box">
            <input
              onChange={this.handleChange}
              className="register-input"
              type="text"
              placeholder="last name"
              name="last_name"
              required
            />
          </div>
          <div className="register-input-box">
            <input
              onChange={this.handleChange}
              className="register-input"
              type="email"
              placeholder="email"
              name="email"
              required
            />
          </div>
          <div className="register-input-box">
            <input
              onChange={this.handleChange}
              className="register-input"
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>

          <div className="register-input-box register-button">
            <input
              className="register-input "
              id="register-input-button"
              type="submit"
              value="Register Now"
            />
          </div>
          <div className="register-text">
            <h3 className="register-header">
              Already have an account?
              <Link to="/login" className="register-link">
                Login now
              </Link>
            </h3>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterBody;
