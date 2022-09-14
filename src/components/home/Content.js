import React from "react";
import cicis_content from "../../resources/cicis_content.jpg";
import crop_grecia from "../../resources/crop_grecia.jpg";
import t_simplicity_dos from "../../resources/t_simplicity_dos.jpg";
import jogger_fila_uno from "../../resources/jogger_fila_uno.jpg";
import t_cherry_tres from "../../resources/t_cherry_tres.jpg";
import crop_mara from "../../resources/crop_mara.jpg";
import jogger_pocket_uno from "../../resources/jogger_pocket_uno.jpg";
import crop_olivia_dos from "../../resources/crop_olivia_dos.jpg";
import crop_sol_dos from "../../resources/crop_sol_dos.jpg";


const Content = () => {
    return (
        <div>
            <div className="content_box">
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div data-aos="fade-down-right" data-aos-duration="1000" id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={t_cherry_tres} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={t_simplicity_dos} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={jogger_fila_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={crop_grecia} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={crop_mara} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={jogger_pocket_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={crop_olivia_dos} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={crop_sol_dos} class="d-block w-100" alt="imagen"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> 
                <div className="texto">
                    <img src={cicis_content} alt="imagen" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800"/>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100" >Cicis es un emprendimiento que comenzo en el año 2019, una idea que se logro materializar
                    con mucha pasion y dedicacion. Se realizan ventas al mayor y al detal, envios a nivel nacional,
                    delivery en caracas y pick up en la zona de La Candelaria.<br/><br/><span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">Sientete hermosa y luce hermosa <i class="bi bi-bag-heart"></i></span></p>
                </div> 
            </div>
            <div id="triangulo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(243, 124, 223)" fill-opacity="1" d="M0,0L720,128L1440,0L1440,320L720,320L0,320Z"></path></svg>
            </div>
        </div>
    )
};

export default Content;