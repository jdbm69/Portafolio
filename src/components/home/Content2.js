import React from "react";
import jogger_fila_uno from "../../resources/jogger_fila_uno.jpg";
import jogger_pink_cuatro from "../../resources/jogger_pink_cuatro.jpg";
import jogger_pocket_tres from "../../resources/jogger_pocket_tres.jpg";
import jogger_balenciaga_tres from "../../resources/jogger_balenciaga_tres.jpg";
import jogger_flores_tres from "../../resources/jogger_flores_tres.jpg";
import crop_olivia_dos from "../../resources/crop_olivia_dos.jpg";
import crop_olimpia_tres from "../../resources/crop_olimpia_tres.jpg";
import crop_sofia_uno from "../../resources/crop_sofia_uno.jpg";
import crop_sol_uno from "../../resources/crop_sol_uno.jpg";
import crop_mara from "../../resources/crop_mara.jpg";
import t_la from "../../resources/t_la.jpg";
import t_ny_uno from "../../resources/t_ny_uno.jpg";
import t_paris from "../../resources/t_paris.jpg";
import t_rainbow from "../../resources/t_rainbow.jpg";
import t_style_uno from "../../resources/t_style_uno.jpg";
import vestido_lily_uno from "../../resources/vestido_lily_uno.jpg";
import vestido_amelia_tres from "../../resources/vestido_amelia_tres.jpg";
import vestido_emily_dos from "../../resources/vestido_emily_dos.jpg";
import vestido_emily_uno from "../../resources/vestido_emily_uno.jpg";
import vestido_sophie_tres from "../../resources/vestido_sophie_tres.jpg";
import tjd_alice from "../../resources/tjd_alice.jpg";
import tjd_grace from "../../resources/tjd_grace.jpg";
import tjd_mia from "../../resources/tjd_mia.jpg";
import tjd_victoria from "../../resources/tjd_victoria.jpg";
import zarcillo_a_presion from "../../resources/zarcillo_a_presion.jpg";
import zarcillos from "../../resources/zarcillos.jpg";
import collar from "../../resources/collar.jpg";
import argolla_dos from "../../resources/argolla_dos.jpg";
import argolla_uno from "../../resources/argolla_uno.jpg";
import { Link } from 'react-router-dom';

const Content2 = () => {
    return (
        <div className="content2_box">
            <div class="card" data-aos="fade-right" data-aos-duration="1000">
                <div id="carousel_joggers" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel_joggers" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel_joggers" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel_joggers" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel_joggers" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carousel_joggers" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={jogger_pink_cuatro} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={jogger_flores_tres} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={jogger_fila_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={jogger_pocket_tres} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={jogger_balenciaga_tres} class="d-block w-100" alt="imagen"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel_joggers" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel_joggers" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">joggers</h5>
                    <Link to="/tienda" class="btn btn-primary">Ver</Link>
                </div>
            </div>

            <div class="card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
            <div id="carousel_crop" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel_crop" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel_crop" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel_crop" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel_crop" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carousel_crop" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={crop_olivia_dos} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={crop_olimpia_tres} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={crop_sofia_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={crop_sol_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={crop_mara} class="d-block w-100" alt="imagen"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel_crop" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel_crop" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">crop-tops</h5>
                    <Link to="/tienda" class="btn btn-primary">Ver</Link>
                </div>
            </div>

            <div class="card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
            <div id="carousel_t" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel_t" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel_t" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel_t" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel_t" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carousel_t" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={t_la} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={t_ny_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={t_paris} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={t_rainbow} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={t_style_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel_t" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel_t" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">t-shirts</h5>
                    <Link to="/tienda" class="btn btn-primary">Ver</Link>
                </div>
            </div>

            <div class="card" data-aos="fade-left" data-aos-duration="1000">
            <div id="carousel_vestidos" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel_vestidos" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel_vestidos" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel_vestidos" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel_vestidos" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carousel_vestidos" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={vestido_lily_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={vestido_amelia_tres} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={vestido_emily_dos} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={vestido_emily_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={vestido_sophie_tres} class="d-block w-100" alt="imagen"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel_vestidos" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel_vestidos" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">vestidos</h5>
                    <Link to="/tienda" class="btn btn-primary">Ver</Link>
                </div>
            </div>

            <div class="card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
            <div id="carousel_tjd" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel_tjd" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel_tjd" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel_tjd" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel_tjd" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={tjd_alice} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={tjd_grace} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={tjd_mia} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={tjd_victoria} class="d-block w-100" alt="imagen"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel_tjd" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel_tjd" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">trajes de baño</h5>
                    <Link to="/tienda" class="btn btn-primary">Ver</Link>
                </div>
            </div>

            <div class="card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
            <div id="carousel_acc" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel_acc" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel_acc" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel_acc" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel_acc" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carousel_acc" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={zarcillos} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={collar} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={zarcillo_a_presion} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={argolla_uno} class="d-block w-100" alt="imagen"/>
                        </div>
                        <div class="carousel-item">
                            <img src={argolla_dos} class="d-block w-100" alt="imagen"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel_acc" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel_acc" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">accesorios</h5>
                    <Link to="/tienda" class="btn btn-primary">Ver</Link>
                </div>
            </div>
        </div>
    )
};

export default Content2;

