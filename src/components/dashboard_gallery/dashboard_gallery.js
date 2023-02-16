import "./dashboard_gallery.css";
import React from "react";
import axios from "axios";
import cookie from "react-cookies";

class ArtSectionHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paintings_home: [],
            isLoaded: false,
            title: "",
            description: "",
            added: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const paintingData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_URL}/painting`);
            const json = await response;
            this.setState({ paintings_home: json.data.response, isLoaded: true });
        };
        paintingData();
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        let formData = new FormData();
        let imagefile = document.querySelector("#file");

        formData.append("image", imagefile.files[0]);
        formData.append("title", this.state.title);
        formData.append("description", this.state.description);
        event.preventDefault();
        axios({
            method: "post",
            url: `${process.env.REACT_APP_URL}/painting`,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                auth_token: cookie.load("auth_token"),
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ added: true });
                    const paintingData = async () => {
                        const response = await axios.get(
                            `${process.env.REACT_APP_URL}/painting`
                        );
                        const json = await response;
                        this.setState({
                            paintings_home: json.data.response,
                            isLoaded: true,
                        });
                    };
                    paintingData();
                }
                console.log(response);
            })
            .catch((error) => {
                if (error.response === undefined) {
                    this.setState({ err: error.message });
                } else {
                    this.setState({ err: error.response.data });
                }
            });
    }

    render() {
        const paintings_home = this.state.paintings_home;
        let { isLoaded } = this.state;
        let { added } = this.state;
        return (
            <section className="home_art_body">
                <h2 className="home_art_head_title">Art Gallery</h2>

                {
                    added ? (
                        <h1 className="dashboard-gallery-added">Image Added!</h1>
                    ) : (

                        <form onSubmit={this.handleSubmit}>
                            <div className="login_input_container">
                                <label className="login_label">Title </label>
                                <input
                                    className="login_Input"
                                    type="text"
                                    name="title"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="login_input_container">
                                <label className="login_label">Description </label>
                                <input
                                    className="login_Input"
                                    type="text"
                                    name="description"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="login_input_container">
                                <label className="login_label">Image</label>
                                <input
                                    className="login_Input"
                                    type="file"
                                    name="image"
                                    id="file"
                                    required
                                />
                            </div>
                            <div className="login_button_container">
                                <input className="login_button" type="submit" value="Add Image" />
                            </div>
                        </form>
                    )
                }


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
                                <button id="dashboard_gallery_delete">delete</button>
                            </div>
                        ))
                    )}
                </div>
            </section>
        );
    }
}

export default ArtSectionHome;
