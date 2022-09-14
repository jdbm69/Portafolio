import React from "react";
import icono from '../resources/icono.jpeg';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavBar = () => {
    return (
        <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="500" className="navBar_box">
            <img data-aos="fade-left" data-aos-delay="700" data-aos-duration="500" className="icon" src={icono} alt="icon"/>
            <ul data-aos="fade-left" data-aos-delay="900" data-aos-duration="500" className="nav_items">
                <CustomLink to="/">inicio</CustomLink>
                <CustomLink to="/tienda" >tienda</CustomLink>
                <CustomLink to="/contacto" >contacto</CustomLink>
            </ul>
            <div data-aos="fade-left" data-aos-delay="1100" data-aos-duration="500" className="contact_icons">
                <a href="https://wa.me/5804241885671" target="_blank" className="bi bi-whatsapp"></a>
                <a href="https://instagram.com/cicisshop.ve?igshid=ODBkMDk1MTU=" target="_blank" class="bi bi-instagram"></a>
            </div>
        </div>
    )
};

export default NavBar;

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}