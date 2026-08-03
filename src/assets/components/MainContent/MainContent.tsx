import {ContentContainer} from '../ContentContainer/ContentContainer'
import styles from '../MainContent/MainContent.module.css'
import {Text} from '../Text/Text'
import {TextInput} from '../TextInput/TextInput'
import { Button } from '../Button/Button'
import React, { useEffect,useState } from 'react'
import { WeatherCard  } from '../WeatherCard/WeatherCard'
import type { CardItem } from '../../../type'

export const MainContent = () => {
  


    const [latitude,setLatitude]= useState(0);
    const [longitude,setLongitude]= useState(0);
    const [searchCity,setSearchCity] = useState("");
    const [weatherData,setWeatherData] =useState<CardItem[]>([]);
 


      //Get weather data from the weather api using the url.
  useEffect(()=>{
  

    if(latitude===0 && longitude=== 0)
      return;                                 // stops the request for coordinates( 0,0)
    async function getWeather() { 

      const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`
       );

    const data = await response.json();

    console.log(data);
       
    
setWeatherData([
  {
    city: searchCity,
    province: "",
    temperature: `${data.current.temperature_2m}`,
    humidity: `${data.current.relative_humidity_2m}`,
    windspeed: `${data.current.wind_speed_10m}`,
    time: data.current.time,
  },
]);
  
  
  
  
  
  }

      getWeather();
  },[longitude,latitude]);

//A user provides a place and it will be converted to latitude and longitude and set them  to state variables 
const getCityCoordinates = async ()=>{
         if(!searchCity.trim())   
    return;   
  try{
   
    const response = await fetch (`https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}&count=1`);
    const data= await response.json();
    console.log(data);
    if(!data.results || data.results.length===0){
      alert('City not found');
      return;
    }


    setLatitude(data.results[0].latitude);
    setLongitude(data.results[0].longitude);

  } catch(error){
    console.error('Error fetching city coordinates:', error);
  }


}


//Get current location by allowing the user to use their location
const getCurrentLocation = ()=>{
     
  navigator.geolocation.getCurrentPosition(
   async (position)=>{
     setLatitude(position.coords.latitude); 
     setLongitude(position.coords.longitude);
      
    })
}

  return (

   
    <>
    <ContentContainer className={styles['main-container']}>
      
     <ContentContainer className={styles.header}>
          <Text variant='h1'> Weather app</Text> 
       <div className={styles['left-content']}>
          <TextInput
              type="text"
              placeholder="Enter your location" 
              className={styles["search-input"]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setSearchCity(e.target.value)}
             />
              <Button label='Search' onClick={getCityCoordinates}></Button>
              <Button label='Use my Location' className={styles['use-location-btn']} onClick={getCurrentLocation}></Button>
        </div>
        </ContentContainer >
        

{weatherData.map((weather) => (
  <WeatherCard
    key={weather.city}
    city={weather.city}
    province={weather.province}
    temperature={weather.temperature}
    humidity={weather.humidity}
    windspeed={weather.windspeed}
    time={weather.time}
  />
))}
    
       
     </ContentContainer>

    </>
  )
}