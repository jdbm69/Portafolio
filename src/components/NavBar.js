import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {

    const[navBar, setNavBar] = useState(false);

    const moverNav = () => {
        if (window.scrollY >= 920) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', moverNav);

    return (
        <>
            <div className={navBar ? 'navBar active' : 'navBar'}>
                <nav>
                    <ul>
                        <li>
                            <Link activeClass="active" smooth spy to="inicio">
                                INICIO
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="sobreMi">
                                SOBRE MI
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="proyectos">
                                PROYECTOS
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="contacto">
                                CONTACTO
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
       
    )
};

export default NavBar;