import "./hero_section_home.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";

class HeroSectionHome extends React.Component {
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
        if (response.status === 200) {
          this.setState({ isLoggedIn: true });
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
    return (
      <section className="home_hero_body">
        <main className="">
          <section className="home_hero_section">
            <div className="home_hero_container home_hero_row">
              <div className="home_hero_wrap_top">
                <h1 className="home_hero_title">
                  <span className="home_hero_accent_one">Square</span>{" "}
                  <span className="home_hero_accent_two">Art</span>
                </h1>
              </div>
              <div className="home_wrap_bottom">
                <p className="home_hero_text">
                  The largest community of arts enthusiasts.
                </p>
                {!loggedIn && (
                  <div>
                    <Link
                      to="/register"
                      className="home_hero_link  home_hero_link_button"
                    >
                      Join Today
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </section>
    );
  }
}

export default HeroSectionHome;
