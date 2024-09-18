import Empty from '../assets/empty.png';
import styles from './EmptyList.module.scss';

export const EmptyList = () => {
  return ( 
    <div className={styles.content}>
      <p className={styles.text}>Список задач пуст</p>
      <img src={Empty} alt='no tasks' className={styles.img}/>
    </div>
   );
}