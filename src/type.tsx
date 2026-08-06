export interface CurrentWeather {
  city: string;
  temperature: number;
  humidity: string;
  windspeed: string;
  time: string;
}

export interface HourlyWeather {
  city: string;
  province: string;
  temperature: number;
  humidity: string;
  windspeed: string;
  time: string;
}

export interface DailyWeather {

 
  date: string;
  temperature: number;
 
} 