import styles from '../components/HourlyCard.module.css'
type HourlyProps = {
  time: string;
  temperature: number;
};

export const HourlyCard = ({
  time,
  temperature,
}: HourlyProps) => {
  return (
    <div className={styles['er']}>
      <p>{time}</p>
      <p>{Math.round(temperature)}°C</p>
    </div>
  );
};

export default HourlyCard;