import "./dashboard_users.css";
import React from "react";
import axios from "axios";
import cookie from "react-cookies";

class DashboardUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardUsers: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.users();
  }
  users = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/user`, {
        headers: { auth_token: cookie.load("auth_token") },
      })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ dashboardUsers: response.data.response });
          this.setState({ isLoaded: true });
        }
      })
      .catch((error) => {
        if (error.response === undefined) {
          this.setState({ err: error.message });
        } else {
          this.setState({ err: error.response.data });
        }
      });
  };

  render() {
    let { isLoaded } = this.state;
    return (
      <>
        <section className="dashboard-users">
          <h1 className="dashboard-users-title">Users</h1>
        </section>

        {!isLoaded && <h1>Loading...</h1>}
        {this.state.dashboardUsers.map((dashboardUser) => (
          <div className="dashboard-users-wrapper" key={dashboardUser._id}>
            <h3 className="dashboard-users-name">
              {dashboardUser.first_name} {dashboardUser.last_name}
            </h3>
            <h3 className="dashboard-users-email">
              <a href={"mailto:" + dashboardUser.email}>
                {dashboardUser.email}
              </a>
            </h3>
            <h3 className="dashboard-users-role">{dashboardUser.role}</h3>
          </div>
        ))}
      </>
    );
  }
}

export default DashboardUsers;
