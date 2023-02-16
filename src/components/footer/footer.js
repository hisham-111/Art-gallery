import "./footer.css";
import React from "react";
import images from "../../images/SquareArt.png";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <img
                src={images}
                alt="logo"
                width="50"
                height="50"
                className="footer-img"
              ></img>
            </div>
            <p className="footer-text-muted">
              &copy; {new Date().getFullYear()} SquareArt
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
