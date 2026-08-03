import type { CardItem } from "../../../type"
import {Text} from '../Text/Text'


export const WeatherCard = ({city, province, humidity, temperature, time, windspeed}: CardItem) => {
return (

 <>  

    <Text variant='h3'>{city}</Text>
    <Text variant='h3'>{province}</Text>
    <Text variant='h3'>{humidity}</Text>
    <Text variant='h3'>{temperature}</Text>
    <Text variant='h3'>{time}</Text>
    <Text variant='h3'>{windspeed}</Text>
 </>
)

}