import React from "react";

const BodyContacto = () => {
    return (
        <div className="body_box_contacto" data-aos="fade-down" data-aos-duration="500">
            <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div className="contacto_box">
                    <div className="list_box" data-aos="fade-left" data-aos-delay="500" data-aos-duration="500">
                        <a class="bi bi-geo-alt-fill" ></a>
                        <p>La Candelaria, Caracas, Venezuela</p>
                    </div>
                    <div className="list_box" data-aos="fade-left" data-aos-delay="800" data-aos-duration="500">
                        <a className="bi bi-whatsapp" ></a>
                        <p>+58 414 188 56 71</p>    
                    </div>
                    <div className="list_box" data-aos="fade-left" data-aos-delay="1100" data-aos-duration="500">
                        <a class="bi bi-instagram" ></a> 
                        <p>@cicisshop.ve</p>   
                    </div>
                    <div className="list_box" data-aos="fade-left" data-aos-delay="1400" data-aos-duration="500">
                        <a class="bi bi-envelope" ></a>    
                        <p>cicisshop@gmail.com</p>
                    </div>
                    <div className="list_box" data-aos="fade-left" data-aos-delay="1700" data-aos-duration="500">
                        <a class="bi bi-alarm" ></a>    
                        <p>Lunes a Viernes de 8:00am a 6:00pm</p>
                    </div>
                </div>
        </div>
    )
};

export default BodyContacto;