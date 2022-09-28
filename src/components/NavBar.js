import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = ({ingles}) => {

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
        </>
       
    )
};

export default NavBar;