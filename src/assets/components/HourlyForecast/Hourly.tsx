import React from 'react'
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
        <Text variant='h4'>icon</Text>
        <Text variant='h4'>{temperature}</Text>
        <Text variant='h4'>{humidity}</Text>


    </ContentContainer>

      

  )
}

export default Hourly
