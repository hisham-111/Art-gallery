import React from "react";
import ArtSectionHome from "../../components/art_section_homepage/art_section_home.js";
import AuthorSectionHome from "../../components/author_section_homepage/author_section_home.js";
import HeroSectionHome from "../../components/hero_section_homepage/hero_section_home.js";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <HeroSectionHome />
                <ArtSectionHome />
                <AuthorSectionHome />
            </>
        );
    }
}

export default Home;
