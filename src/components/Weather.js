"use client";

import { useEffect, useState } from "react";

// Integração com a API Open-Meteo (gratuita, sem chave): https://open-meteo.com
const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=-8.0476&longitude=-34.877&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&timezone=America%2FSao_Paulo";

function describe(code) {
  if (code === 0) return ["Céu limpo", "☀️"];
  if (code <= 2) return ["Parcialmente nublado", "⛅"];
  if (code === 3) return ["Nublado", "☁️"];
  if (code === 45 || code === 48) return ["Neblina", "🌫️"];
  if (code >= 51 && code <= 57) return ["Garoa", "🌦️"];
  if (code >= 61 && code <= 67) return ["Chuva", "🌧️"];
  if (code >= 80 && code <= 82) return ["Pancadas de chuva", "🌧️"];
  if (code >= 95) return ["Tempestade", "⛈️"];
  return ["Tempo variável", "🌤️"];
}

export default function Weather() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(URL)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((j) => alive && setData(j.current))
      .catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, []);

  const [label, icon] = data ? describe(data.weather_code) : ["", ""];

  return (
    <aside className="card weather" aria-live="polite">
      <p className="eyebrow">Agora no Recife</p>
      {error && <p className="muted">Não foi possível carregar o clima.</p>}
      {!data && !error && (
        <div className="skeleton-group">
          <div className="skeleton" style={{ width: "60%", height: 44 }} />
          <div className="skeleton" style={{ width: "80%", height: 14 }} />
        </div>
      )}
      {data && (
        <>
          <div className="weather-main">
            <span className="weather-icon">{icon}</span>
            <span className="weather-temp">{Math.round(data.temperature_2m)}°C</span>
          </div>
          <p className="weather-label">{label}</p>
          <ul className="weather-meta">
            <li>Sensação <strong>{Math.round(data.apparent_temperature)}°</strong></li>
            <li>Umidade <strong>{data.relative_humidity_2m}%</strong></li>
            <li>Vento <strong>{Math.round(data.wind_speed_10m)} km/h</strong></li>
          </ul>
        </>
      )}
      <p className="source">Dados: Open-Meteo API</p>
    </aside>
  );
}
