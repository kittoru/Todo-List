import styles from './Form.module.scss';
import { useState } from "react";


export const Form = ( {handelTaskAdd} ) => {
  const [value, setValue] = useState('');

  const handelClick = (e) => {
    e.preventDefault();
    handelTaskAdd(value);
    setValue('');
  }

  return ( 
    <form className={styles.form}  onSubmit={handelClick}>
      <input type="text" value={value} onInput={(e) => setValue(e.target.value)} placeholder='Добавить задачу...'/>
      <button type="submit" className='button'>Добавить</button>
    </form>
   );
}