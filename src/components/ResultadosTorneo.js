import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ResultadosTorneo() {
  const [torneo, setTorneo] = useState(JSON.parse(localStorage.getItem('torneo')));

  let navigate = useNavigate(); // Correct usage

    const handleHoyoSiguiente = () => {
        // Guardar los cambios en el LocalStorage
        // localStorage.setItem('torneo', JSON.stringify(torneo));
        setTorneo({...torneo, hoyoActual: torneo.hoyoActual + 1});
        localStorage.setItem('torneo', JSON.stringify(torneo));
    };

    const handleHoyoAnterior = () => {
        // Guardar los cambios en el LocalStorage
        setTorneo({...torneo, hoyoActual: torneo.hoyoActual - 1});
        localStorage.setItem('torneo', JSON.stringify(torneo));
    };


    const handleAcabarTorneo = () => {
        // Guardar los cambios en el LocalStorage
        localStorage.setItem('torneo', JSON.stringify(torneo));
        navigate('/resumen');
    };



  const handleResultadoChange = (participante, hoyoIndex, value) => {
    const newResultados = torneo.resultados;
    
    newResultados[participante][hoyoIndex] = parseInt(value);
    setTorneo({ ...torneo, resultados: newResultados });
    localStorage.setItem('torneo', JSON.stringify(torneo));

  };


  return (
    <div>
      {/* <h2>Resultados del Hoyo {torneo.hoyoActual} </h2> */}

      <table className="table">
        <thead className="thead">
          <tr>
            <th></th>
            {torneo.participantes.map((participante, index) => (
                <th className="td">{participante}</th>
            ))}
          </tr>

        </thead>
        <tbody className="tbody">
        <tr key="resultados"  className="tr">
        <th className="tdh">Hoyo {torneo.hoyoActual}</th>
        {
          torneo.participantes.map((participante, index) => (
            <td key={participante + "-resultados"}  className="td-score">
                <input
                type="number"
                className = "input-score"
                value={torneo.resultados[participante][torneo.hoyoActual-1]}
                onChange={(e) => {
                        console.log('participante: ', participante);
                        handleResultadoChange(participante, torneo.hoyoActual - 1, e.target.value)

                    }}
                />
            </td>
              ))
          }
        </tr>
        {/* </tbody>
      </table>

      <table className="table">
        <thead className="thead">
          <tr key="resumen">
            {torneo.participantes.map((participante, index) => (
                <th className="td">{participante}</th>
            ))}
          </tr>

        </thead>
        <tbody className="tbody"> */}
        <tr key="resumen2" className="tr">
            <th className="tdh">Total</th>
          {
          torneo.participantes.map((participante, index) => (
            <td key={participante + "-resultados"} className="td-score" style={{ fontFamily: 'Scoreboard' }}>
                {
                    torneo.resultados[participante].reduce((acc, resultado) => acc + resultado, 0)
                }
            </td>
              ))
          }
        </tr>
        </tbody>
      </table>

      
      <div className=" text-center p-6">

      <button onClick={handleHoyoAnterior} disabled={torneo.hoyoActual == 1} className="btn-primary">Hoyo Anterior</button>
      <button onClick={handleHoyoSiguiente} disabled={torneo.hoyoActual == torneo.numeroHoyos} className="btn-primary">Hoyo Siguiente</button>
      {torneo.hoyoActual == torneo.numeroHoyos && <button onClick={handleAcabarTorneo} className="btn-second">Acabar Torneo</button>}
      </div>
    </div>
  );
}

export default ResultadosTorneo;
