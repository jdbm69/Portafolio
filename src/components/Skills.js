import React, { useState } from "react"; 

const Skills = () => {

    const[barra, setBarra] = useState(false);

    const rellenarBarra = () => {
        if (window.scrollY >= 920) {
            setBarra(true);
        } else {
            setBarra(false);
        }
    };

    const skills = [
        {
            nombre: 'React.js',
            porcentaje: '90%',
            barra: 'noventa',
            barraActive: 'noventa-active'
        },
        {
            nombre: 'React Native',
            porcentaje: '50%',
            barra: 'cincuenta',
            barraActive: 'cincuenta-active'
        },
        {
            nombre: 'Next.js',
            porcentaje: '60%',
            barra: 'sesenta',
            barraActive: 'sesenta-active'
        },
        {
            nombre: 'HTML',
            porcentaje: '90%',
            barra: 'noventa',
            barraActive: 'noventa-active'
        },
        {
            nombre: 'CSS',
            porcentaje: '90%',
            barra: 'noventa',
            barraActive: 'noventa-active'
        },
        {
            nombre: 'JavaScript',
            porcentaje: '90%',
            barra: 'noventa',
            barraActive: 'noventa-active'
        },
        {
            nombre: 'TypeScript',
            porcentaje: '70%',
            barra: 'setenta',
            barraActive: 'setenta-active'
        },
        {
            nombre: 'SASS',
            porcentaje: '90%',
            barra: 'noventa',
            barraActive: 'noventa-active'
        },
        {
            nombre: 'Bootstrap',
            porcentaje: '80%',
            barra: 'ochenta',
            barraActive: 'ochenta-active'
        },
        {
            nombre: 'Python',
            porcentaje: '70%',
            barra: 'setenta',
            barraActive: 'setenta-active'
        },
        {
            nombre: 'Git & GitHub',
            porcentaje: '80%',
            barra: 'ochenta',
            barraActive: 'ochenta-active'
        },
        {
            nombre: 'Photoshop',
            porcentaje: '50%',
            barra: 'cincuenta',
            barraActive: 'cincuenta-active'
        },
        {
            nombre: 'Figma',
            porcentaje: '50%',
            barra: 'cincuenta',
            barraActive: 'cincuenta-active'
        },
    ];

    window.addEventListener('scroll', rellenarBarra);

    return (
        <div className="container_skills" data-aos="fade-down" data-aos-delay="1200" data-aos-duration="1000">
            {skills.map(skill =>(
                <div className="skill">
                    <div className="nombre">
                        <h4>{skill.nombre}</h4>
                    </div>
                    <div className="barras">
                        <div className="barra" id={barra ? skill.barraActive : skill.barra}></div>
                    </div>
                    <p>{skill.porcentaje}</p>
                </div>
            ))}
        </div>
    )
};

export default Skills;