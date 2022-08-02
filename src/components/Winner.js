import React from "react";

const Winner = ({
    setBotonUsuario,
    setBotonJugar,
    setBotonRetry,
    setEleccionComputadora,
    setEleccionUsuario, 
    setGanador,
    botonRetry,
    ganador
}) => {
    const jugarDeNuevo = () => {
        setTimeout(() => {
            setBotonUsuario(false);
            setBotonJugar(true);
            setBotonRetry(true);
            setEleccionComputadora('');
            setEleccionUsuario('');
            setGanador('');        
        }, 500) 
    };

    return (
        <div>
            <p id='resultado' className='resultado'>{ganador}</p>
            <button disabled={botonRetry} onClick={jugarDeNuevo}>Jugar de nuevo</button>
        </div>
    )
};

export default Winner;