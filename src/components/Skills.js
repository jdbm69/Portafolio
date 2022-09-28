import React, { useState } from "react"; 
import bootstrap from "../resources/bootstrap.png";
import css from "../resources/css.png";
import html from "../resources/html.png";
import js from "../resources/js.png";
import photoshop from "../resources/photoshop.png";
import python from "../resources/python.png";
import react from "../resources/react.png";
import sass from "../resources/sass.png";

const Skills = () => {

    const[barra, setBarra] = useState(false);

    const rellenarBarra = () => {
        if (window.scrollY >= 920) {
            setBarra(true);
        } else {
            setBarra(false);
        }
    };

    window.addEventListener('scroll', rellenarBarra);

    return (
        <div className="container_skills" data-aos="fade-down" data-aos-delay="1200" data-aos-duration="1000">
            <div className="skill">
                <div className="icono">
                    <img src={html} alt="ico" className={barra ? 'imagen-active-uno' : 'imagen'}/>
                    <h2>HTML</h2>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'noventa-active' : 'noventa'}></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={css} alt="ico" className={barra ? 'imagen-active-dos' : 'imagen'}/>
                    <h2>CSS</h2>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'noventa-active' : 'noventa'}></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={js} alt="ico" className={barra ? 'imagen-active-uno' : 'imagen'}/>
                    <h2>Javascript</h2>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'noventa-active' : 'noventa'}></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={react} alt="ico" className={barra ? 'imagen-active-dos' : 'imagen'}/>
                    <h2>React</h2>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'ochenta-active' : 'ochenta'}></div>
                </div>
                <p>80%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={sass} alt="ico" className={barra ? 'imagen-active-uno' : 'imagen'}/>
                    <h2>Sass</h2>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'ochenta-active' : 'ochenta'}></div>
                </div>
                <p>80%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={bootstrap} alt="ico" className={barra ? 'imagen-active-dos' : 'imagen'}/>
                    <h2>Bootstrap</h2>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'setenta-active' : 'setenta'}></div>
                </div>
                <p>70%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={python} alt="ico" className={barra ? 'imagen-active-uno' : 'imagen'}/>
                    <h2>Python</h2>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'sesenta-active' : 'sesenta'}></div>
                </div>
                <p>60%</p>
            </div>
            <div className="skill">
                <div className="icono">
                    <img src={photoshop} alt="ico" className={barra ? 'imagen-active-dos' : 'imagen'}/>
                    <h2>Photoshop</h2>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'cincuenta-active' : 'cincuenta'}></div>
                </div>
                <p>50%</p>
            </div>
        </div>
    )
};

export default Skills;