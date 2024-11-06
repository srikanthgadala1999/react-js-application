// src/components/WeatherInfo.jsx
import React from 'react';

const WeatherInfo = ({ label, value }) => {
  return (
    <div>
      <strong>{label}:</strong> {value}
    </div>
  );
};

export default WeatherInfo;
