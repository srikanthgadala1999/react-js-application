// src/App.jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      // Here we assume you will get latitude and longitude of the city
      // For simplicity, you can use hardcoded lat/lon or a mock API if necessary
      const latitude = 40.7128; // example latitude
      const longitude = -74.006; // example longitude

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const data = await response.json();

      setWeatherData({
        city,
        temperature: data.current_weather.temperature,
        condition: data.current_weather.weathercode,
        wind_speed: data.current_weather.windspeed,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather Now</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
