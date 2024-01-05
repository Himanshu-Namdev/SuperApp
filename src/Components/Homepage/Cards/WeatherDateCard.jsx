import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import Wind from './Assets/wind.png';
import Humidity from './Assets/Humidity.png';
import Pressure from './Assets/pressure.png';
import Line from './Assets/Line.png';

const WeatherDateCard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(moment());
  const [weatherData, setWeatherData] = useState({});
  const location = "Delhi,India";
  const apiKey = "987de39fe8924052ada80850232502&q"; // Replace with your actual API key

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(moment());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeatherData();
  }, [apiKey, location]);

  const formattedDate = currentDateTime.format("M-DD-YYYY");
  const formattedTime = currentDateTime.format("hh:mm A");

  return (
    <div className="bg-[#101744] w-[100%] h-[177px] rounded-lg">
      <div className="w-[100%] bg-[#FF4ADE] h-14 rounded-tl-lg rounded-tr-lg flex justify-around items-center">
        <p className="font-normal font-roboto text-[33px] text-white">
          {formattedDate}
        </p>
        <p className="font-normal font-roboto text-[33px] text-white">
          {formattedTime}
        </p>
      </div>
      {weatherData && weatherData.current ? (
        <div className="text-white flex items-center justify-around">
          <div className="flex flex-col justify-center items-center ">
            {weatherData.current.condition.icon && (
              <img
                src={`https:${weatherData.current.condition.icon}`}
                alt="Weather Icon"
                style={{ width: "50px", height: "50px" }}
              />
            )}
            <p className="font-roboto text-[31px]">
              {weatherData.current.condition.text}
            </p>
          </div>
          <img src={Line} alt="" className="h-[50px]" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[45px]">{weatherData.current.temp_c}°C</p>
            <p className="flex">
              <img src={Pressure} alt="" className="m-2" />
              {weatherData.current.pressure_mb} mbar <br />Pressure
            </p>
          </div>
          <img src={Line} alt="" className="h-[50px]" />
          <div className="flex flex-col justify-center items-center">
            <p className="flex">
              <img
                src={Wind}
                alt=""
                className="w-[32px] h-[32px] m-2"
              />
              {weatherData.current.wind_kph} km/h <br /> Wind
            </p>
            <p className="flex mt-2">
              <img
                src={Humidity}
                alt=""
                className="m-2 w-[22px] h-[30px]"
              />
              {weatherData.current.humidity}% <br />Humidity
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherDateCard;
