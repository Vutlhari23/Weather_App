import './App.css'
import { MainContent } from './assets/components/MainContent/MainContent'
import { useEffect, useState } from 'react'

function App() {



  const [latitude,setLatitude]= useState(0);
  const [longitude,setLongitude]= useState(0);
  const [searchCity,setSearchCity] = useState('');
 





  useEffect(()=>{
  //A user provides a place and it will be converted to latitude and longitude



  
  console.log(latitude,longitude);
async function getWeather() {



    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`
    );

    const data = await response.json();

    console.log(data);
}

getWeather();
  },[longitude,latitude]);

//A user provides a place and it will be converted to latitude and longitude
const getCityCoordinates = async ()=>{
 
  if(!searchCity.trim())   
    return;   
  try{
   
    const response = await fetch (`https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}&count=1`);
    const data= await response.json();
    console.log(data);
    setLatitude(data.results[0].latitude);
    setLongitude(data.results[0].longitude);
 




  } catch(error){
    console.error('Error fetching city coordinates:', error);
  }
             // if the SearchCity is empty, return and do nothing




}
const getCurrentLocation = ()=>{
     
  navigator.geolocation.getCurrentPosition(
   async (position)=>{
     setLatitude(position.coords.latitude); 
     setLongitude(position.coords.longitude);
      
    })
   
}

  return (
    <>
     <MainContent/>
     <input type="text" placeholder="Enter a location" value={searchCity} onChange={(e) => setSearchCity(e.target.value)}/>
     <button onClick={getCityCoordinates}>Search</button>
     <button onClick={getCurrentLocation}>Use My Location</button>
    <p>Latitude: {latitude}</p>
    <p>Longitude: {longitude}</p>

   


    </>
  )
}

export default App
