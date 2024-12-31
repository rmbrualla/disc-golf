import React from 'react';

function ResumenTorneo() {
  const torneo = JSON.parse(localStorage.getItem('torneo'));

  // Calcular los puntajes totales y ordenar los jugadores
  // ...

  const calculaGolpesTotales = (participante) => {
    return torneo.resultados[participante].reduce((acc, resultado) => acc + resultado, 0)
  };

  const calculaMejorHoyo = (participante) => {
    return Math.min(...torneo.resultados[participante]);
  }

  const calculaGanadores = () => {
    return torneo.participantes.map((participante, index) => ({ 
        nombre: participante, 
        puntuacion: calculaGolpesTotales(participante) 
      })).sort((a, b) => a.puntuacion - b.puntuacion)
    }


  return (
    <div>
      <h2 className="h2">Resumen del Torneo</h2>
      <h3 className="h3">Podio</h3>
      <p>🥇 {calculaGanadores()[0].nombre}  </p>
      {torneo.participantes.length >= 2 && <p>🥈 {calculaGanadores()[1].nombre} </p>}
      {torneo.participantes.length >= 3 && <p>🥉 {calculaGanadores()[2].nombre} </p>}

      <h3  className="h3">Estadísticas</h3>
      <table className="table" >
        <thead className="thead">
          <tr key="resumen">
            <th></th>
            {torneo.participantes.map((participante, index) => (
                <th className="tdh">{participante}</th>
            ))}
          </tr>

        </thead>
        <tbody className="tbody">
        <tr className="tr" key="sobre-par">
            <td className="tdh">Sobre par</td>
          {
          torneo.participantes.map((participante, index) => (
            <td className="td score" key={participante + "-resultados"}>
                {
                    calculaGolpesTotales(participante) - 3 * torneo.numeroHoyos
                }
            </td>
              ))
          }
        </tr>
        <tr className="tr" key="golpes-totales">
            <td className="tdh">Golpes totales</td>
          {
          torneo.participantes.map((participante, index) => (
            <td className="td score" key={participante + "-resultados"}>
                {
                    calculaGolpesTotales(participante)
                }
            </td>
              ))
          }
        </tr>
        <tr className="tr" key="posicion">
            <td className="tdh">Posición</td>
          {
          torneo.participantes.map((participante, index) => (
            <td className="td score" key={participante + "-posicion"}>
                {
                    calculaGanadores().findIndex((elemento) => elemento.nombre === participante) + 1
                }
            </td>
              ))
          }
        </tr>
        <tr className="tr" key="media">
            <td className="tdh">Media por Hoyo</td>
          {
          torneo.participantes.map((participante, index) => (
            <td className="td score" key={participante + "-media"}>
                {
                    // torneo
                    (calculaGolpesTotales(participante) /  torneo.numeroHoyos).toFixed(2)
                }
            </td>
              ))
          }
        </tr>
        <tr className="tr" key="mejor-hoyo">
            <td className="tdh">Mejor Hoyo</td>
          {
          torneo.participantes.map((participante, index) => (
            <td className="td score" key={participante + "-mejor"}>
                {
                    calculaMejorHoyo(participante)                }
            </td>
              ))
          }
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResumenTorneo;
