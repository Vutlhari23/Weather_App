import { ContentContainer } from "../ContentContainer/ContentContainer"
import type  { CurrentWeather} from "../../../type"
import {Text} from '../Text/Text'


export const CurrentForecast = ({city,temperature, humidity, windspeed,time}: CurrentWeather) => {
  return (
    <ContentContainer>

      <Text variant="h1">{city}</Text>
      <Text variant="h1">Icon</Text>
      <Text variant="h3">Humidity: {humidity}</Text>
      <Text variant="h1">
        Temperature: {Math.round(temperature)}&deg;C
      </Text>
      <Text variant="h3">Time: {time}</Text>
      <Text variant="h3">Wind Speed: {windspeed}</Text>
    </ContentContainer>
  )
}


