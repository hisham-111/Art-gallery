import React from "react";
import GalleryBody from "../../components/gallery/gallery_body.js";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <GalleryBody />
            </>
        );
    }
}

export default Gallery;
