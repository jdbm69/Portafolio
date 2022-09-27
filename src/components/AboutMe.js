import React from "react"; 
import Skills from "./Skills";
import yo from "../resources/yo.JPG";

const AboutMe = () => {
    return (
        <div className="container_aboutme">
            <h2 data-aos="flip-right" data-aos-delay="200" data-aos-duration="1000">SOBRE MI</h2>
            <div className="linea" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000"></div>
            <div className="skills_about">
                <div className="about">
                    <img src={yo} data-aos="flip-up" data-aos-delay="600" data-aos-duration="1000"/>
                    <p data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1000">Soy un desarrollador front-end residiendo en Caracas, Venezuela.<br/>
                        Tengo mucha pasion por efectos UI, animaciones y crear 
                        <span> experiencias</span> de usuario.
                    </p>
                </div>
                <Skills />
            </div>
        </div>
    )
};

export default AboutMe;