# Weather App

[![codecov](https://codecov.io/gh/marcobiedermann/weather-app/branch/main/graph/badge.svg?token=TlgWfUDzDA)](https://codecov.io/gh/marcobiedermann/weather-app)
[![CI](https://github.com/marcobiedermann/weather-app/actions/workflows/ci.yml/badge.svg)](https://github.com/marcobiedermann/weather-app/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cdaeda22-70b8-4b3b-a9a1-d1ad45d2e542/deploy-status)](https://app.netlify.com/sites/marcobiedermann-weather/deploys)

A simple and intuitive weather dashboard built with React, TypeScript, and Vite. This app fetches real-time weather data from the OpenWeather API and displays essential weather information for a specified location.

## Features

- Search for current weather conditions by city
- Displays temperature, humidity, wind speed, and weather conditions

## Technologies Used

- React (TypeScript)
- Vite
- OpenWeather API

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/marcobiedermann/weather-app.git
cd weather-app
```

2. Install dependencies:

```sh
npm ci
```

3. Obtain an API key from [OpenWeather](https://openweathermap.org/api) and create a `.env` file in the project root:

```sh
VITE_OPEN_WEATHER_MAP_API_KEY=your_api_key_here
```

4. Start the development server:

```sh
npm run dev
```

5. Open your browser and go to `http://localhost:5173/` to view the app.

## Deployment

To build the project for production:

```sh
npm run build
```

To preview the production build:

```sh
npm run preview
```

## Contributing

Feel free to fork this repository and submit pull requests to improve the app.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [OpenWeather API](https://openweathermap.org/api)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
