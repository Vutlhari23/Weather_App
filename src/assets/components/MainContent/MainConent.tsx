import { useState, useEffect } from "react";
import type { CardItem } from "../../../type";
import { WeatherCard } from "../LinkCard/WeatherCard";

export const MainContent = () => {
  const cities = [
    {
      name: "Johannesburg",
      province: "Gauteng",
      lat: -26.2041,
      long: 28.0473,
    },
    {
      name: "Polokwane",
        province: "Limpopo",
      lat: -23.9,
      long: 29.45,
    },
    {
      name: "Durban",
      province: "KwaZulu-Natal",
      lat: -29.858,
      long: 31.022,
    },
  ];

  const [weatherData, setWeatherData] = useState<CardItem[]>([
    {
      city: "Johannesburg",
      province: "Gauteng",
      humidity: "50%",
      temperature: "25°C",
      time: "12:00 PM",
      windspeed: "15 km/h",
    },
  ]);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const results = await Promise.all(
          cities.map(async (city) => {
            const response = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`,
            );

            const data = await response.json();

            return {
              city: city.name,
              province: city.province,
              humidity: `${data.current.relative_humidity_2m}`,
              temperature: `${data.current.temperature_2m}`,
              time: data.current.time,
              windspeed: `${data.current.wind_speed_10m}`,
            };
          }),
        );

        setWeatherData(results);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeatherData();
  }, []);

  return (
    <>
      {weatherData.map((weather) => (
        <WeatherCard
          key={weather.city}
          city={weather.city}
          province={weather.province}
          humidity={weather.humidity}
          temperature={weather.temperature}
          time={weather.time}
          windspeed={weather.windspeed}
        />
      ))}
    </>
  );
};