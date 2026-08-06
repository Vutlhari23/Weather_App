import {ContentContainer} from '../ContentContainer/ContentContainer'
import {Text} from '../Text/Text'


type HourlyProps = {
    time?: string,
    temperature?: number,
    humidity?: number;

}

export const Hourly = ({time,temperature, humidity}: HourlyProps) => {
  return (
    <ContentContainer>
        <Text variant='h4'>{time}</Text>
        <Text variant='1'>icon</Text>
        <Text variant='h4'>{Math.round(temperature ?? 0)}</Text> {/*Default or a fallback value when the temprature is undefined*/}
        <Text variant='h4'>{humidity}</Text>


    </ContentContainer>

      

  )
}


