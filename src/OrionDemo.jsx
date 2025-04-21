import { useState } from 'react';

export default function OrionDemo() {
  const [query, setQuery] = useState('');
  const [module, setModule] = useState('NEBULA');
  const [response, setResponse] = useState('');

  const handleConsult = () => {
    const simulatedResponses = {
      ARGUS: `Análisis de riesgo sobre "${query}" → Riesgo estimado: 62%`,
      NEBULA: `Análisis semántico sobre "${query}" → Tendencia: Positiva`,
      VALOR: `Optimización financiera para "${query}" → Rentabilidad proyectada: 9.4%`,
      CELESTIA: `Simulación en tiempo real sobre "${query}" → Resultado: Estable`,
      AURA: `Reporte generado para "${query}" → Descargable en PDF`
    };
    setResponse(simulatedResponses[module]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">O.R.I.O.N. – Demo del Sistema IA</h1>
      <p className="text-lg mb-6 text-center max-w-2xl">La inteligencia que guía tus decisiones. Simula una consulta eligiendo el módulo de análisis y escribiendo tu objetivo.</p>
      <div className="bg-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-xl">
        <input
          placeholder="Ej: Energía solar en LATAM"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-black p-2 rounded w-full mb-4"
        />
        <select
          value={module}
          onChange={(e) => setModule(e.target.value)}
          className="text-black p-2 rounded w-full mb-4"
        >
          <option value="ARGUS">ARGUS – Riesgos</option>
          <option value="NEBULA">NEBULA – Análisis Semántico</option>
          <option value="VALOR">VALOR – Optimización Financiera</option>
          <option value="CELESTIA">CELESTIA – Simulación Estratégica</option>
          <option value="AURA">AURA – Reportes Automáticos</option>
        </select>
        <button onClick={handleConsult} className="bg-white text-black px-4 py-2 rounded w-full">Consultar</button>
        {response && (
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-lg font-medium">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
