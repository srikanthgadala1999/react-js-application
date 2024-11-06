// src/components/WeatherDisplay.jsx
import React from 'react';
import WeatherInfo from './WeatherInfo';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Please enter a city to see the weather.</p>;
  }

  return (
    <div>
      <h2>Weather in {weatherData.city}</h2>
      <WeatherInfo
        label="Temperature"
        value={`${weatherData.temperature} °C`}
      />
      <WeatherInfo label="Conditions" value={weatherData.condition} />
      <WeatherInfo label="Wind Speed" value={`${weatherData.wind_speed} m/s`} />
    </div>
  );
};

export default WeatherDisplay;
