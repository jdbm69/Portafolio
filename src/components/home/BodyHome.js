import React from "react";
import Title from "./Title";
import Content from "./Content";
import Content2 from "./Content2";
import Footer from "../Footer";

const BodyHome = () => {
    return (
        <div className="body_box">
            <Title />
            <Content />
            <Content2 />
            <Footer />
        </div>
    )
};

export default BodyHome;