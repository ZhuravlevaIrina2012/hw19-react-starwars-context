import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import ErrorPage from "./ErrorPage";

const Main = props => {
    switch (props.page) {
        case aboutMePage:
            return <AboutMe/>;
        case starWarsPage:
            return <StarWars/>;
        case contactPage:
            return <Contact/>;
        case homePage:
            return <Home/>;
        default:
            return <ErrorPage/>
    }

};

export default Main;