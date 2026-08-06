import { ContentContainer } from "../ContentContainer/ContentContainer"
import { Text } from "../Text/Text"

type DailyProps ={
    weekDay : string,
    time : string,
    temperature? : number,


}
export const Daily = ({weekDay, time, temperature} :DailyProps) => {
  return (
    <ContentContainer>
        <Text variant ='h1'>{weekDay}</Text>
        <Text variant ='h1'>{time}</Text>
        <Text variant ='h1'>{temperature}</Text>
    </ContentContainer>
      


  )
}


