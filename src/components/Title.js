import React, { useState } from "react";
import { Link } from "react-scroll";

const Title = ({ingles}) => {

    const[title, setTitle] = useState(false);

    const cambiarFuente = () => {
        if (window.scrollY >= 130) {
            setTitle(true);
        } else {
            setTitle(false);
        }
    };

    window.addEventListener('scroll', cambiarFuente);

    return (
        <div className="container_title">
            <h1 data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">
                {ingles ? 'Hi, I am ' : 'Hola soy '}<span className={title ? 'title active' : 'title'}>Jhonny Bracho</span>. <br/> {ingles ? 'Front-end developer' : 'Desarrollador front-end'}.
            </h1>
            <div className="boton" data-aos="fade-down" data-aos-delay="2300" data-aos-duration="2000">
                <Link id="button" activeClass="active" smooth spy to="sobreMi">{ingles ? 'View my work' : 'Ver mi trabajo'}<i class="bi bi-arrow-down-square-fill"></i></Link>
            </div>
        </div>  
    )
};

export default Title;

            