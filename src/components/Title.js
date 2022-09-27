import React, { useState } from "react";
import { Link } from "react-scroll";

const Title = () => {

    const[title, setTitle] = useState('uno');

    const cambiarFuente = () => {
        if (window.scrollY >= 200) {
            setTitle('dos');
        };
    };

    window.addEventListener('scroll', cambiarFuente);

    return (
        <div className="container_title">
            <h1 data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">
                Hola, soy <span>Jhonny Bracho</span>. <br/> Desarrollador front-end.
            </h1>
            <div className="boton" data-aos="fade-down" data-aos-delay="2300" data-aos-duration="2000">
                <Link id="button" activeClass="active" smooth spy to="sobreMi">Ver mi trabajo<i class="bi bi-arrow-down-square-fill"></i></Link>
            </div>
        </div>  
    )
};

export default Title;

            