<<<<<<< HEAD
import { ContentContainer } from "../ContentContainer/ContentContainer";
import styles from "../MainContent/MainContent.module.css";
import { Text } from "../Text/Text";
import { TextInput } from "../TextInput/TextInput";
import { Button } from "../Button/Button";
import React, { useEffect, useState } from "react";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { DailyCard } from "../DailyCard";
import { HourlyCard } from "../HourlyCard";

import type {
  CurrentWeather,
  HourlyWeather,
  DailyWeather,
} from "../../../type";

export const MainContent = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [searchCity, setSearchCity] = useState("");

  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeather | null>(null);

  const [hourlyWeather, setHourlyWeather] =
    useState<HourlyWeather[]>([]);

  const [dailyWeather, setDailyWeather] =
    useState<DailyWeather[]>([]);

  useEffect(() => {
    if (latitude === 0 && longitude === 0) return;

    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
        );


        const data = await response.json();

        console.log(data);

        // Current Weather
        setCurrentWeather({
          city: searchCity,
          province: "",
          temperature: data.current.temperature_2m,
          humidity: `${data.current.relative_humidity_2m}%`,
          windspeed: `${data.current.wind_speed_10m} km/h`,
          time: data.current.time,
        });

        // Hourly Weather

  const today = data.current.time.split("T")[0];      
const hourly = data.hourly.time
  .map((time: string, index: number): HourlyWeather => ({
    city: searchCity,
    province: "",
    temperature: data.hourly.temperature_2m[index],
    humidity: `${data.hourly.relative_humidity_2m[index]}%`,
    windspeed: `${data.hourly.wind_speed_10m[index]} km/h`,
    time,
  }))
  .filter((hour: HourlyWeather) => hour.time.startsWith(today));

setHourlyWeather(hourly);









        // Daily Weather
 const daily = data.daily.time.map((date: string, index: number) => ({
  city: searchCity,
  province: "",
  date,
  temperature: data.daily.temperature_2m_max[index],
}));

        setDailyWeather(daily);
      } catch (error) {
        console.error(error);
      }
    }

    getWeather();
  }, [latitude, longitude]);

  const getCityCoordinates = async () => {
    if (!searchCity.trim()) return;

    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}&count=1`
      );

      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        alert("City not found");
        return;
      }

      setLatitude(data.results[0].latitude);
      setLongitude(data.results[0].longitude);
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  return (
    <ContentContainer className={styles["main-container"]}>
      <ContentContainer className={styles.header}>
        <i
          className="bi bi-cloud-moon-fill"
          style={{ fontSize: "80px", paddingLeft: "10px" }}
        ></i>

        <Text variant="h1">Weather App</Text>

        <div className={styles["left-content"]}>
          <TextInput
            type="text"
            placeholder="Enter your location"
            className={styles["search-input"]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchCity(e.target.value)
            }
          />

          <Button label="Search" onClick={getCityCoordinates} />

          <Button
            label="Use My Location"
            className={styles["use-location-btn"]}
            onClick={getCurrentLocation}
          />
        </div>
      </ContentContainer>

      {currentWeather && (
        <WeatherCard
          city={currentWeather.city}
          province={currentWeather.province}
          temperature={currentWeather.temperature}
          humidity={currentWeather.humidity}
          windspeed={currentWeather.windspeed}
          time={currentWeather.time}
        />
      )}
     <div id={styles.hourly}>
      {hourlyWeather.map((hour) => (
        <HourlyCard
          key={hour.time}
          time={hour.time}
          temperature={hour.temperature}
        />
      ))}

      </div>
      

      <div id={styles.daily}>
      {dailyWeather.map((day) => (
        <DailyCard
          key={day.date}
          date={day.date}
          temperature={day.temperature}

        />
      ))}

      </div>
    </ContentContainer>
  );
}; 
=======
import styles from  '../MainContent/MainContent.module.css'
import type { HourlyWeather, DailyWeather,CurrentWeather } from '../../../type'
import {CurrentForecast} from  "../CurrentForecast/CurrentForecast"

>>>>>>> d7eb1c27dfb3ea658887ecff581b434d97b903e9
