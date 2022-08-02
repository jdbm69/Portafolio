const resultado = (
    eleccionUsuario,
    eleccionComputadora,
    setGanador
) => {
    if (eleccionComputadora === eleccionUsuario) {
        setGanador('Empate'); 
    } else if (eleccionComputadora === 'Piedra') {
        if (eleccionUsuario === 'Papel') {
            setGanador('Tu ganas')
        } else if (eleccionUsuario === 'Tijera') {
            setGanador('Bot gana')
        }
    } else if (eleccionComputadora === 'Papel') {
        if (eleccionUsuario === 'Piedra') {
            setGanador('Bot gana')
        } else if (eleccionUsuario === 'Tijera') {
            setGanador('Tu ganas')
        }
    } else if (eleccionComputadora === 'Tijera') {
        if (eleccionUsuario === 'Papel') {
            setGanador('Bot gana')
        } else if (eleccionUsuario === 'Piedra') {
            setGanador('Tu ganas')
        }
    }
};



export default resultado;
