import "./App.css";
import React from "react";
import Contact from "./pages/contact/contact.js";
import Faq from "./pages/faq/faq.js";
import Gallery from "./pages/gallery/gallery.js";
import Home from "./pages/home/home.js";
import Login from "./pages/login/login.js";
import Register from "./pages/register/register.js";
import { Routes, Route } from "react-router-dom";
import Visitor from "./route/visitor/visitor";
import Admin from "./route/admin/admin";
import DashboardUsers from "./components/dashboard_users/dashboard_users";
import DashboardWelcome from "./components/dashboard_welcome/dashboard_welcome";
import DashboardInbox from "./components/dashboard_inbox/dashboard_inbox";
import DashboardGallery from "./components/dashboard_gallery/dashboard_gallery";
import DashboardAddAdmin from "./components/dashboard_add_admin/dashboard_add_admin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Routes>
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin" element={<DashboardWelcome />} />
            {/* <Route path="/admin/logout" element={<Logout />} /> */}
            <Route path="/admin/gallery" element={<DashboardGallery />} />
            <Route path="/admin/users" element={<DashboardUsers />} />
            <Route path="/admin/inbox" element={<DashboardInbox />} />
            <Route path="/admin/add-admin" element={<DashboardAddAdmin />} />
          </Route>
          <Route path="/" element={<Visitor />}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
