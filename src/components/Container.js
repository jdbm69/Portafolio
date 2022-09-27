import React from "react";
import Title from "./Title";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import NavBarDos from "./NavBarDos";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Container = () => {
    return (
        <div className="box">
            <NavBar />
            <div className="lines">
                <div className="line" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000"></div>
                <div className="line" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000"></div>
                <div className="line" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000"></div>
            </div>
            <section id="inicio"><Title /></section>
            <NavBarDos />
            <section id="sobreMi"><AboutMe /></section>
            <section id="proyectos"><Projects /></section>
            <section id="contacto"><Contact /></section>
            <Footer />
        </div>
    )
};

export default Container;