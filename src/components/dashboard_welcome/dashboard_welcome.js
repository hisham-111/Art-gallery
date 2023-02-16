import "./dashboard_welcome.css";

import React from "react";

class DashboardWelcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <h1 className="dashboard-welcome-title">Welcome to the dashboard</h1>
            </>
        );
    }
}

export default DashboardWelcome;
