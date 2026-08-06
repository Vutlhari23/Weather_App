import { ContentContainer } from "../ContentContainer/ContentContainer"
import { Text } from "../Text/Text"
import { Button } from "../Button/Button"
import { TextInput } from "../TextInput/TextInput"
import styles from '../Searchbar/Searchbar.module.css'
import { useState } from "react"

type  SearchProps= {

   getWeatherData: (latitude: number, longitude: number, city: string) =>  void;
}


export const Searchbar = ({getWeatherData}: SearchProps)  => {




const [searchCity,setSearchCity] = useState ('');


const  getCityCoordinates= async () => {
 
    if(!searchCity.trim())   //No city found.
        return ; 
 
    try{ 
        
        // Converts the city into coordinates that will be used to get the weather
        const  response= await fetch (`https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}&count=1`);
        const data =  await response.json() ;  // converts the  response data to json  and store the json data inside the data variable.
        
        //if data is not found then display an alert message
        if ( !data.results || data.results.length === 0){
            alert("City not found");
            return;
        }
        
        //if data is found set the data results into the state variables.
    const latitude =data.results[0].latitude;
    const longitude= data.results[0].longitude;

        getWeatherData(latitude,longitude,searchCity);


    }
    catch(error){
        console.error(error);
    }
};










  return (
    <ContentContainer>
         <TextInput
              type="text"
              placeholder="Enter your location" 
              className={styles["search-input"]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setSearchCity(e.target.value)}
             />
              <Button label='Search' onClick={getCityCoordinates}></Button>   
        
    </ContentContainer>
 
  )
}

export default Searchbar
