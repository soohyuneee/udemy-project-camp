import React, { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState('');
  const [place, setPlace] = useState('');
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((json) => {
        const weather = json.weather[0].main;
        const temperature = json.main.temp;
        const place = json.name;
        setWeather(`${weather} / ${temperature}°`);
        setPlace(place);
      });
  };

  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  };

  const handleGeoError = () => {
    alert("Can't find you. No weather for you.");
  };

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };

  useEffect(() => {
    askForCoords();
  }, []);

  return (
    <aside id="weather">
      <span>{weather}</span>
      <span>{place}</span>
    </aside>
  );
}

export default Weather;
