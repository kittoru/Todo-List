import { useState } from "react";
import { Modal } from "./Modal";
import styles from './Item.module.scss';


export const Item = ( {id, text, status, onCheck, toggleStatus, updateTask } ) => {
  const [modal, setModal] = useState(false);

  const deleteTask = () => {
    onCheck(id);
  };
  const handelClick =(value) => {
    updateTask({id, text: value});
  };
  
  const openModal =() => {
    setModal(true);
  }
  const closeModal= () => {
    setModal(false);
  }
  
  return ( 
    <li key={id} className={`${styles.item} ${status? styles.completed : ''}`} >
      <form className={styles.form}>
        <input type="checkbox" id={id} className={styles.input} onClick={() => toggleStatus(id)}/>
        <label for={id} className={styles.lable}>{text}</label>
      </form>
      <div className={styles.actions}>
        <button onClick={deleteTask} className={`${styles.delete} ${styles.action}`}></button>
        <button onClick={openModal} className={`${styles.edit} ${styles.action}`}></button>
      </div>
      <Modal status={modal} close={closeModal} getData={handelClick} text={text} />
    </li>
   );
}