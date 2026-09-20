import { useEffect, useState } from "react";
import { fetchWeather } from "./api/weatherApi";

function WeatherWidget() {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetchWeather("Da Nang").then((data) => {
      setWeather(data);
    });
  }, []);
  return <div>Thời tiết: {weather}</div>;
}

export default WeatherWidget;
