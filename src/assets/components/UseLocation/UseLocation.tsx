import {Button} from '../Button/Button'
import styles from '../UseLocation/UseLocation.module.css'

type LocationProps = {
      getWeatherData: (latitude: number, longitude: number) =>  void;
}



export const UseLocation = ({getWeatherData }: LocationProps) => {



  const getCurrentLocationCoords = (latitude: number, longitude: number) =>{
      navigator.geolocation.getCurrentPosition( (position) => {
        
        const latitude =position.coords.latitude;
        const longitude= position.coords.longitude;

        getWeatherData(latitude,longitude);
      })
  };




  
  return (
    <Button
            label="Use My Location"
            className={styles["use-location-btn"]}
            onClick={()=> getCurrentLocationCoords}
          />
  )
}

