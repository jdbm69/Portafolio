import React from "react"; 
import bootstrap from "../resources/bootstrap.png";
import css from "../resources/css.png";
import html from "../resources/html.png";
import js from "../resources/js.png";
import photoshop from "../resources/photoshop.png";
import python from "../resources/python.png";
import react from "../resources/react.png";
import sass from "../resources/sass.png";

const Skills = () => {
    return (
        <div className="container_skills" data-aos="flip-left" data-aos-delay="1200" data-aos-duration="1000">
            <div className="skill">
                <div className="icono">
                    <img src={html} alt="ico"/>
                    <h2>HTML</h2>
                </div>
                <div className="barras">
                    <div className="barra" id="noventa"></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={css} alt="ico"/>
                    <h2>CSS</h2>
                </div>
                <div className="barras">
                    <div className="barra" id="noventa"></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={js} alt="ico"/>
                    <h2>Javascript</h2>
                </div>
                <div className="barras">
                    <div className="barra" id="noventa"></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={react} alt="ico"/>
                    <h2>React</h2>
                </div>
                <div className="barras">
                    <div className="barra" id="ochenta"></div>
                </div>
                <p>80%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={sass} alt="ico"/>
                    <h2>Sass</h2>
                </div>
                <div className="barras">
                    <div className="barra" id="ochenta"></div>
                </div>
                <p>80%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={bootstrap} alt="ico"/>
                    <h2>Bootstrap</h2>
                </div>
                <div className="barras">
                    <div className="barra" id="setenta"></div>
                </div>
                <p>70%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={python} alt="ico"/>
                    <h2>Python</h2>
                </div>
                <div className="barras">
                    <div className="barra" id="sesenta"></div>
                </div>
                <p>60%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={photoshop} alt="ico"/>
                    <h2>Photoshop</h2>
                </div>
                <div className="barras">
                    <div className="barra" id="cincuenta"></div>
                </div>
                <p>50%</p>
            </div>
        </div>
    )
};

export default Skills;