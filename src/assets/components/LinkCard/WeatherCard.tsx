import type { CardItem } from "../../../type"


export const WeatherCard = ({city, province, humidity, temperature, time, windspeed}: CardItem) => {
return (

 <>
 <p>City : {city}</p>
  <p>Province :{province}</p>
   <p> Humidity : {humidity}</p>
    <p>Temperature : {temperature }</p>
     <p>Time : {time }</p>
     <p>Wind Speed : { windspeed}</p>
 
 
 </>
)

}