import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CrearTorneo() {
  const [nombreTorneo, setNombreTorneo] = useState('');
  const [numHoyos, setNumHoyos] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorNumHoyos, setErrorNumHoyos] = useState('');
  const [participantes, setParticipantes] = useState([]);
  const [nuevoParticipante, setNuevoParticipante] = useState('');

  let navigate = useNavigate(); // Correct usage

  const handleCrearTorneo = () => {
    // Validación
    var validacion_ok = true
    if (!nombreTorneo) {
      setErrorNombre('Por favor, ingresa un nombre para el torneo');
      validacion_ok = false;
    } else {
      setErrorNombre('');
    }
    if (!numHoyos || isNaN(numHoyos)) {
      setErrorNumHoyos('Por favor, ingresa un número válido de hoyos');
      validacion_ok = false;
    } else {
      setErrorNumHoyos('');
    }
    // Solo salimos una vez hemos valido todos los campos.
    if (!validacion_ok) {
      return;
    }
    console.log('participantes: ', participantes)
    const resultados = participantes.reduce(
      (acc, participante) => {
        console.log(participante)
        acc[participante] = Array.from({length: parseInt(numHoyos)}, (v, i) => 0);
        return acc;
      }, {})
    console.log('resultados: ', resultados)
    // Si la validación pasa, crear el torneo    
    const torneo = {
      nombre: nombreTorneo,
      numeroHoyos: parseInt(numHoyos), // Convierte el número de hoyos a entero
      participantes,
      resultados,
      hoyoActual: 1,
    };
  

    // Guarda el objeto del torneo en LocalStorage
    localStorage.setItem('torneo', JSON.stringify(torneo));
  
    // Muestra un mensaje de confirmación (opcional)
    alert('¡Torneo creado con éxito!' + JSON.stringify(torneo));

    // Limpiar los campos del formulario
    setNombreTorneo('');
    setNumHoyos('');
    setParticipantes([]);
    setNuevoParticipante('');


    navigate('/resultados');
  };

  const handleAgregarParticipante = () => {
    if (nuevoParticipante.trim() !== '') {
      setParticipantes([...participantes, nuevoParticipante]);
      setNuevoParticipante('');
    }
  };

  return (

    <div className="py-4 m-8">

      {/* Formulario para ingresar los detalles del torneo */}
      <div className="text-center block">
      <input
        type="text"
        className = "input-text"
        placeholder="Nombre del torneo"
        value={nombreTorneo}
        onChange={(e) => setNombreTorneo(e.target.value)}
      />
      {errorNombre && <p style={{ color: 'red' }}>{errorNombre}</p>}

      <input
        type="text"
        placeholder="Numero de hoyos"
        className = "input-text"
        value={numHoyos}
        onChange={(e) => setNumHoyos(e.target.value)}
      />
      {errorNumHoyos && <p style={{ color: 'red' }}>{errorNumHoyos}</p>}

      </div>

      <input
        type="text"
        placeholder="Nombre del participante"
        className = "input-text"
        value={nuevoParticipante}
        onChange={(e) => setNuevoParticipante(e.target.value)}
      />
      <button onClick={handleAgregarParticipante} className="btn-primary">Agregar Participante</button>

      <ul>
        {participantes.map((participante, index) => (
          <li key={index}>{participante}</li>
        ))}
      </ul>


      <div className="mx-auto">

      <button onClick={handleCrearTorneo} className="btn-second">Crear Torneo</button>
      </div>
    </div>
  );
}

export default CrearTorneo;
