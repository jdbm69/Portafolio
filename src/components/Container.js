import React, { useState } from "react";
import Title from "./Title";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import NavBarDos from "./NavBarDos";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Language from "./Language";

const Container = () => {

    const[ingles, setIngles] = useState(false);

    return (
        <div className="box">
            <NavBar ingles={ingles}/>
            <Language setIngles={setIngles}/>
            <div className="lines">
                <div className="line" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000"></div>
                <div className="line" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000"></div>
                <div className="line" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000"></div>
            </div>
            <section id="inicio"><Title ingles={ingles}/></section>
            <NavBarDos ingles={ingles}/>
            <section id="sobreMi"><AboutMe ingles={ingles}/></section>
            <section id="proyectos"><Projects ingles={ingles}/></section>
            <section id="contacto"><Contact ingles={ingles}/></section>
            <Footer />
        </div>
    )
};

export default Container;