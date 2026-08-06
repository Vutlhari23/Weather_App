import type { CardItem } from "../../../type"
import {Text} from '../Text/Text'


export const WeatherCard = ({city, province, humidity, temperature, time, windspeed}: CardItem) => {
return (

 <>  

    <Text variant='h3'>city : {city}</Text>
    <Text variant='h3'>  Humidity : {humidity}</Text>
    <Text variant='h3'> Temperature : {temperature}</Text>
    <Text variant='h3'>Time : {time}</Text>
    <Text variant='h3'> windSpeed: {windspeed}</Text>
 </>
)

}