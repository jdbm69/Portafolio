import React from "react";
import ppt from "../resources/ppt.png";
import cicis from "../resources/cicis.png";
import calculadora from "../resources/calculadora.png";

const Projects = ({ingles}) => {
    return (
        <>
            <div className="container_projects">
                <h2 data-aos="flip-left" data-aos-delay="500" data-aos-duration="1000">{ingles ? 'PROJECTS' : 'PROYECTOS'}</h2>
                <div className="linea" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000"></div>
                <div className="projects">
                    <div className="project" data-aos="flip-down" data-aos-delay="500" data-aos-duration="1000">
                        <img src={ppt} alt='project'/>
                        <div className="info" id="ppt">
                            <h3>{ingles ? 'Rock, Paper or Scissors' : 'Piedra, Papel o Tijera'}</h3>
                            <div className="icons">
                                <a rel="noreferrer" href="https://github.com/jdbm69/PiedraPapelTijera" target="_blank" class="bi bi-github"><p>{ingles ? 'Repository' : 'Repositorio'}</p></a>
                                <a rel="noreferrer" href="https://piedrapapeltijera69.netlify.app" target="_blank" class="bi bi-globe"><p>Web</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="project" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1000">
                        <img src={cicis} alt='project'/>
                        <div className="info" id="cc">
                            <h3>Cicis Shop</h3>
                            <div className="icons">
                                <a rel="noreferrer" href="https://github.com/jdbm69/CicisShop" target="_blank" class="bi bi-github"><p>{ingles ? 'Repository' : 'Repositorio'}</p></a>
                                <a rel="noreferrer" href="https://cicisshop.netlify.app/" target="_blank" class="bi bi-globe"><p>Web</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="project" data-aos="flip-down" data-aos-delay="500" data-aos-duration="1000">
                        <img src={calculadora} alt='project'/>
                        <div className="info" id="cal">
                            <h3>{ingles ? 'Calculator' : 'Calculadora'}</h3>
                            <div className="icons">
                                <a rel="noreferrer" href="https://github.com/jdbm69/Calculadora" target="_blank" class="bi bi-github"><p>{ingles ? 'Repository' : 'Repositorio'}</p></a>
                                <a rel="noreferrer" href="https://calculadora69.netlify.app/" target="_blank" class="bi bi-globe"><p>Web</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blanco"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(0, 0, 0)" fill-opacity="1" d="M0,0L720,128L1440,0L1440,320L720,320L0,320Z"></path></svg>
        </>
    )
};

export default Projects;