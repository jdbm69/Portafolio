import React from "react";

const Title = () => {
    return (
    <div className="titulo">
        <h1>Piedra Papel o Tijera</h1>
        <div className="info">
            <i class="bi bi-info-circle-fill"></i>
            <p className='oculta'>
                Selecciona tu arma y ganale al bot<br/><br/>
                Piedra aplasta tijera<br/>
                Papel envuelve a piedra<br/>
                Tijera corta papel
            </p>    
        </div>
    </div>
    )
};

export default Title;