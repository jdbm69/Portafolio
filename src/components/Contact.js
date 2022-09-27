import React from "react"; 

const Contact = () => {

    return (
        <div className="container_contact">
            <h2 data-aos="flip-right" data-aos-delay="500" data-aos-duration="1000">CONTACTO</h2>
            <div className="linea" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000"></div>
            <p data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">Tienes alguna pregunta o quieres que trabajemos juntos?</p>
            <div className="contacts">
                <a rel="noreferrer" href="https://www.linkedin.com/in/jhonny-bracho-782387235" target="_blank" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" class="bi bi-linkedin"> </a>
                <a rel="noreferrer" href="mailto:jhonnybracho2012@gmail.com" target="_blank" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000" class="bi bi-envelope"> </a>
                <a rel="noreferrer" href="https://wa.me/5804140210971" target="_blank" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" class="bi bi-whatsapp"> </a>
            </div>
        </div>
    )
};

export default Contact;