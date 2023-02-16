import "./dashboard.css";
import React from "react";
import DashboardNav from "../../components/dashboard_nav/dashboard_nav";
import { Outlet } from "react-router-dom";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="dashboard">
                <DashboardNav />

                <div className="dashboardmain-content">
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default Dashboard;
