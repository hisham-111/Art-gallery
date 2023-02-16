import React from "react";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Outlet } from "react-router-dom";

class Visitor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        );
    }
}

export default Visitor;
