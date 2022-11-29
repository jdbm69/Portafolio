import React, { useState } from "react"; 

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
                <div className="nombre">
                    <h4>React.js</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'noventa-active' : 'noventa'}></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>React Native</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'cincuenta-active' : 'cincuenta'}></div>
                </div>
                <p>50%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>Next.js</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'sesenta-active' : 'sesenta'}></div>
                </div>
                <p>60%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>HTML</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'noventa-active' : 'noventa'}></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>CSS</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'noventa-active' : 'noventa'}></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>Javascript</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'noventa-active' : 'noventa'}></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>TypeScript</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'setenta-active' : 'setenta'}></div>
                </div>
                <p>70%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>SASS</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'noventa-active' : 'noventa'}></div>
                </div>
                <p>90%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>Bootstrap</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'ochenta-active' : 'ochenta'}></div>
                </div>
                <p>80%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>Python</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'setenta-active' : 'setenta'}></div>
                </div>
                <p>70%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>Git & GitHub</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'ochenta-active' : 'ochenta'}></div>
                </div>
                <p>80%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>Photoshop</h4>
                </div>
                <div className="barras">
                    <div className="barra" id={barra ? 'cincuenta-active' : 'cincuenta'}></div>
                </div>
                <p>50%</p>
            </div>
            <div className="skill">
                <div className="nombre">
                    <h4>Figma</h4>
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