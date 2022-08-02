import React from 'react';

const User = ({eleccionUsuario, setEleccionUsuario, botonUsuario, puntuacionUsuario}) => {
    const handleChangeUsuario = (e) => {
        setEleccionUsuario(e.target.value);
    };

    return (
        <div className='user_box'>
                <button className="bi bi-circle-fill" disabled={botonUsuario} value='Piedra' onClick={handleChangeUsuario}></button>
                <button className="bi bi-square" disabled={botonUsuario} value='Papel' onClick={handleChangeUsuario}></button>
                <button className="bi bi-scissors" disabled={botonUsuario} value='Tijera' onClick={handleChangeUsuario}></button>
                <p className='eleccion_usuario'>Tu eleccion: <span>{eleccionUsuario}</span></p>
                <p className='puntuacion_usuario'>Tu puntuacion: <span>{puntuacionUsuario}</span></p>
        </div>
    )
}

export default User;