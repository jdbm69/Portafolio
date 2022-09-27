import React from "react"; 
import { Link } from 'react-scroll';

const Footer = () => {

    return (
        <div className="container_footer">
            <Link activeClass="active" smooth spy to="inicio" id="button">
                <i class="bi bi-arrow-up"></i>
            </Link>
            <p>JHONNY BRACHO © <span>2022</span></p>
        </div>
    )
};

export default Footer;