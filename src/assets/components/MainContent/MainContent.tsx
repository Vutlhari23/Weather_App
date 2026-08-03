import {ContentContainer} from '../ContentContainer/ContentContainer'
import styles from '../MainContent/MainContent.module.css'
import {Text} from '../Text/Text'
import {TextInput} from '../TextInput/TextInput'
import { Button } from '../Button/Button'


export const MainContent = () => {
  


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
               
        />
        <Button label='Search'></Button>
        <Button label='Use my Location'></Button>
        </div>
        </ContentContainer >

       
     </ContentContainer>

    </>
  )
}