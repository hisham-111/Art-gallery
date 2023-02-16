import "./author_section_home.css";
import React from "react";

class AuthorSectionHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home_author_art_parent">
        <hr className="home_author_hr" />
        <div className="home_author_art_container">
          <div className="home_author_image_container">
            <img
              className="home_author_art_img"
              src="https://placekitten.com/400/400"
              alt="cat"
            />
          </div>

          <div className="home_author_art_child_container">
            <h3 className="home_author_art_title">Mark Dolmayeh</h3>
            <p className="home_author_art_paragraph">
              Lorem Ipsum is simply dummy text of <br /> the printing and
              typesetting industry.
              <br /> Lorem Ipsum has been the industry's <br />
              standard dummy text ever since the <br /> 1500s, software like
              Aldus PageMaker <br /> including versions of Lorem Ipsum.
              <br />
              Lorem Ipsum has been the industry's <br />
              standard dummy text ever since the
              <br /> 1500s, software like Aldus PageMaker
              <br />
              including versions of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorSectionHome;
