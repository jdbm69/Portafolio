import React from "react";
import { Link } from "react-scroll";

const NavBar = ({ingles}) => {
    return (
            <div className="navBarDos" data-aos="fade-down" data-aos-duration="1000">
                <nav>
                    <ul>
                        <li>
                            <Link activeClass="active" smooth spy to="inicio">
                                {ingles ? 'HOME' : 'INICIO'}
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="sobreMi">
                                {ingles ? 'ABOUT ME' : 'SOBRE MI'}
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="proyectos">
                                {ingles ? 'PROJECTS' : 'PROYECTOS'}
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="contacto">
                                {ingles ? 'CONTACT' : 'CONTACTO'}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
    )
};

export default NavBar;