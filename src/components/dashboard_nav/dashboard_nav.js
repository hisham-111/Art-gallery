import "./dashboard_nav.css";
import React from "react";
import Logo from "../../images/SquareArt.png";
import { NavLink, Link } from "react-router-dom";
import cookie from "react-cookies";

class DashboardNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    logOut = () => {
        cookie.remove("auth_token", { path: "/" });
        cookie.remove("user", { path: "/" });
        this.isLoggedIn();
    };

    render() {
        return (
            <>
                <nav className="dashnav-whole-nav">
                    <div className="dashnav-logo">
                        <Link className="dashnav-logo-title dashnav-link" to="/admin">
                            <img src={Logo} width="50" height="50" alt="Square Art logo" />
                            <span className="dashnav-title">Square Art</span>
                        </Link>
                    </div>
                    <div className="dashnav-menu">
                        <div className="dashnav-navigation">
                            <NavLink to="/admin/gallery" className="dashnav-link">
                                Art Gallery
                            </NavLink>
                            <NavLink to="/admin/users" className="dashnav-link">
                                Users
                            </NavLink>
                            <NavLink to="/admin/inbox" className="dashnav-link">
                                Inbox
                            </NavLink>
                            <NavLink to="/admin/add-admin" className="dashnav-link">
                                New Admin
                            </NavLink>

                            <Link
                                to="/"
                                id="nav-logout"
                                className="nav-link"
                                onClick={(e) => {
                                    this.logOut();
                                }}
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default DashboardNav;
