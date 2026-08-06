import styles from '../components/DailyCard.module.css'

type DailyProps = {

  date: string;
  temperature: number;
};

export const DailyCard = ({
  date,
   temperature

}: DailyProps) => {
  return (
    <div className={styles.daily}>
      <p>{date}</p>
      <p>{temperature}</p>
    
    </div>
  );
};

export default DailyCard;