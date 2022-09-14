import React from "react";
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="500" className="title_box">
            <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="500" className="title">
                <h1 data-aos="zoom-out" data-aos-delay="1500" data-aos-duration="500">
                    <span className="letra">C</span>
                    <span className="letra">I</span>
                    <span className="letra">C</span>
                    <span className="letra">I</span>
                    <span className="letra">S</span>
                </h1>
                <h2 data-aos="zoom-out" data-aos-delay="2000" data-aos-duration="500">Sientete hermosa y luce hermosa</h2>
                <Link to="/tienda" data-aos="fade-up" data-aos-delay="2500" data-aos-duration="500">IR A TIENDA</Link>   
            </div>
        </div>
    )
};

export default Title;