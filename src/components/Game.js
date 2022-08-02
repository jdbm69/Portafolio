import React, { useEffect, useState } from 'react';
import resultado from '../functions/logic';
import User from './User';
import Bot from './Bot';
import Winner from './Winner'

export default function App() {        
    const[eleccionUsuario, setEleccionUsuario] = useState('');
    const[eleccionComputadora, setEleccionComputadora] = useState('');
    const[ganador, setGanador] = useState('');
    const[botonUsuario, setBotonUsuario] = useState(false);
    const[botonJugar, setBotonJugar] = useState(true);
    const[botonRetry, setBotonRetry] = useState(true);
    const[puntuacionUsuario, setPuntuacionUsuario] = useState(0);
    const[puntuacionComputadora, setPuntuacionComputadora] = useState(0);

    useEffect(() => {
        if (eleccionUsuario !== '') {
            setBotonJugar(false)
        }

        if (eleccionComputadora !== '') {
            setBotonUsuario(true);
            setBotonJugar(true);
        }

        if (eleccionComputadora !== '' && eleccionUsuario !== '') {
            resultado(eleccionUsuario, eleccionComputadora, setGanador) ;
        }

        if (ganador !== '') {
            setTimeout(() => {
                setBotonRetry(false);    
            }, 600) 
        }
    })

    useEffect(() => {
        if (ganador === 'Tu ganas') {
            setPuntuacionUsuario(puntuacionUsuario + 1);
        } else if (ganador === 'Bot gana') {
            setPuntuacionComputadora(puntuacionComputadora + 1);
        }
    }, [ganador])

    return (
        <div className='game_box'>
            <div className='user_bot_box'>
                <User 
                eleccionUsuario={eleccionUsuario}
                setEleccionUsuario={setEleccionUsuario}
                botonUsuario={botonUsuario}
                puntuacionUsuario={puntuacionUsuario}
                />
                <Bot 
                eleccionComputadora={eleccionComputadora}
                setEleccionComputadora={setEleccionComputadora}
                botonJugar={botonJugar}
                puntuacionComputadora={puntuacionComputadora}
                />  
            </div>
            <div className='winner_box'>
                <Winner 
                setBotonUsuario={setBotonUsuario}
                setBotonJugar={setBotonJugar}
                setBotonRetry={setBotonRetry}
                setEleccionComputadora={setEleccionComputadora}
                setEleccionUsuario={setEleccionUsuario} 
                setGanador={setGanador}
                botonRetry={botonRetry}
                ganador={ganador}
                />
            </div>
        </div>
    )
}