import React from "react";

const Bot = ({eleccionComputadora, setEleccionComputadora, botonJugar, puntuacionComputadora}) => {
    const jugar = () => {
        setTimeout(handleChangeComputadora, 500);
    };

    const handleChangeComputadora = () => {
        const opcionesComputadora = ['Piedra', 'Papel', 'Tijera'];
        var random = Math.floor(Math.random() * (opcionesComputadora.length));
        setEleccionComputadora(opcionesComputadora[random]);
    };

    return (
    <div className="bot_box">
        <button  disabled={botonJugar} onClick={jugar}> Jugar </button>
        <p className='eleccion_computadora'>Bot eleccion: <span>{eleccionComputadora}</span></p>
        <p className='puntuacion_computadora'>Bot puntuacion: <span>{puntuacionComputadora}</span></p>
    </div>
    )
};

export default Bot;