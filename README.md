# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Weather Now 🌤️

Weather Now is a simple React application designed to let users quickly check the current weather conditions for any city. It leverages the Open-Meteo API for real-time weather data and includes a clean, user-friendly interface.

## 📋 Project Overview

### Features

- Search for current weather in any city
- Display key weather information including temperature, conditions, and wind speed
- User-friendly and responsive interface

### Technology Stack

- **Framework**: React
- **Styling**: Plain CSS
- **Data Fetching**: Open-Meteo API (No authentication required)

## 🚀 Getting Started

## 📂 Project Structure

```plaintext
weather-now/
├── public/
│   └── vite.svg                # Vite logo
├── src/
│   ├── assets/                 # Any assets (e.g., images or icons)
│   ├── components/             # Reusable React components
│   │   ├── SearchBar.jsx       # Input for city search
│   │   ├── WeatherDisplay.jsx  # Displays weather data
│   │   └── WeatherInfo.jsx     # Renders individual weather metrics
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```
