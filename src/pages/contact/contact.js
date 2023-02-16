import React from "react";
import ContactBody from "../../components/contact/contact_body.js";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <ContactBody />
            </>
        );
    }
}

export default Contact;
