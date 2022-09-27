import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
    return (
            <div className="navBarDos" data-aos="fade-down" data-aos-duration="1000">
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
    )
};

export default NavBar;