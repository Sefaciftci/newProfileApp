import axios from "axios";
import "./weatherApp.css";
import React, { useEffect, useState } from "react";

const WeatherMain = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  
    const formSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios
          .get(
            `http://api.weatherapi.com/v1/forecast.json?key=4af49a9bf73b4a0d86a55305240203&q=${city}&days=5&aqi=yes&alerts=yes`
          )
          .then((response) => setWeatherData(response.data));
      } catch (error) {
        console.error("Error");
      }
    };

  return <div className="weatherContainer">
    <h1 className="weatherTitle">Weather</h1>
    <div>
      <form onSubmit={formSubmit}> 
        <input
        className="weatherInput"
        type="text"
        value={city}
        onChange={(e)=> setCity(e.target.value)}
        placeholder="Location"
        />
      </form>
    </div>
    {weatherData &&(
      <div className="weatherInfo">
        <h3 className="weatherLocation">{weatherData.location.name}</h3>
          <div className="weatherContent">
            <img src={weatherData.current.condition.icon}/>
            <div>
            <h3 className="weatherTemp">{weatherData.current.temp_c}°C</h3>
            <p>{weatherData.current.condition.text}</p>
            </div>
          </div>
            <p className="weatherLocaltime">{weatherData.location.localtime} </p>
      </div>
    )}
  </div>;
};

export default WeatherMain;
