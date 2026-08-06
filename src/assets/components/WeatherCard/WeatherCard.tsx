import type { CurrentWeather } from "../../../type";
import { ContentContainer } from "../ContentContainer/ContentContainer";
import { Text } from "../Text/Text";
import styles from "./WeatherCard.module.css";



type WeatherCardProps = {
  city: string;
  province: string;
 temperature: number;
  humidity: string;
  windspeed: string;
  time: string;
};
export const WeatherCard = ({
  city,

  humidity,
  temperature,
  time,
  windspeed,
}: WeatherCardProps) => {
  return (
    <ContentContainer className={styles.card}>
      <Text variant="h1">{city}</Text>
      <Text variant="h1">Icon</Text>
      <Text variant="h3">Humidity: {humidity}</Text>
      <Text variant="h1">
        Temperature: {Math.round(temperature)}&deg;C
      </Text>
      <Text variant="h3">Time: {time}</Text>
      <Text variant="h3">Wind Speed: {windspeed}</Text>
    </ContentContainer>
  );
};