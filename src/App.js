import React from 'react';
import CrearTorneo from './components/CrearTorneo';
import ResumenTorneo from './components/ResumenTorneo';
import ResultadosTorneo from './components/ResultadosTorneo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Import your Tailwind CSS here


function App() {
  return (
    <div className="bg-gray-500">
      <h1 className="h1">Tanteo Frisbee Golf</h1>
      <div className="mx-auto">
      <BrowserRouter basename="disc-golf">
        <Routes>
          <Route path="/" element={<CrearTorneo />} />
          <Route path="/resultados" element={<ResultadosTorneo />} />
          <Route path="/resumen" element={<ResumenTorneo />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
