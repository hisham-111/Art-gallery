
import React from "react";
import axios from "axios";

class ArtSectionHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paintings_home: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const paintingData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_URL}/painting`);
      const json = await response;
      this.setState({ paintings_home: json.data.response, isLoaded: true });
    };
    paintingData();
  }

  render() {
    const paintings_home = this.state.paintings_home;
    let { isLoaded } = this.state;
    return (
      <section className="home_art_body">
        <h2 className="home_art_head_title">Art Gallery</h2>

        <div className="home_art_parent">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            paintings_home.map((paint) => (
              <div className="home_art_container" key={paint._id}>
                <div className="home_art_img_container">
                  <img
                    className="home_art_img"
                    src={`${process.env.REACT_APP_URL}/uploads/${paint.image}`}
                    alt={paint.description}
                    width={400}
                  />
                </div>
                <div>
                  <h3 className="home_art_title">{paint.title}</h3>
                  <p className="home_art_paragraph">{paint.description}</p>
                </div>
              </div>
            ))
          )}
        </div>


      </section>
    );
  }
}

export default ArtSectionHome;
