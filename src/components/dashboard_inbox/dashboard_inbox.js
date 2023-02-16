import "./dashboard_inbox.css";
import React from "react";
import axios from "axios";
import cookie from "react-cookies";


class DashboardInbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inbox: [],
      err: "",
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.inbox();

  }
  inbox = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/contact`, {
        headers: { auth_token: cookie.load("auth_token") },
      })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ inbox: response.data.response });
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
        <section className="dashboard-inbox">
          <h1 className="dashboard-inbox-title">Inbox</h1>
        </section>
        {!isLoaded && <h1>Loading...</h1>}
        {this.state.inbox.map((userInbox) => (
          <div className="dashboard-inbox-wrapper" key={userInbox._id}>
            <div className="dashboard-inbox-name-email">
              <h3 className="dashboard-inbox-name">
                {userInbox.user_id.first_name} {userInbox.user_id.last_name}
              </h3>
              <h5 className="dashboard-inbox-email">
                <a href={"mailto:" + userInbox.user_id.email}>
                  {userInbox.user_id.email}
                </a>
              </h5>
            </div>
            <p
              className="dashboard-inbox-message"
              title={"created @: " + userInbox.createdAt}
            >
              {userInbox.message}
            </p>
            <span className="dashboard-inbox-date">{userInbox.updatedAt}</span>


          </div>
        ))}
      </>
    );
  }
}
export default DashboardInbox;
