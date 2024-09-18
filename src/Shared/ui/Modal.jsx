import { useState } from "react";
import ReactModal from "react-modal";
import styles from './Modal.module.scss';


export const Modal = ({ status, close, getData, text }) => {
  const [value, setValue] = useState(text);
  const handelClick = (e) => {
    e.preventDefault();
    getData(value);
    close();
  };
  return ( 
      <ReactModal isOpen={status} onRequestClose={close} shouldCloseOnOverlayClick={false} ariaHideApp={false} className={styles.modal}>
        <div className="container">
          <div className={styles.content}>
            <h1>Изменить задачу</h1>
            <form className={styles.form}>
              <input type="text" value={value} onInput={(e) => setValue(e.target.value)}/>
              <div className={styles.actions}>
                <button onClick={close} className={`${styles.button} button`}>Отмена</button>
                <button onClick={handelClick} className='button'>Сохранить</button>  
              </div>
          </form>
          </div>
        </div>
    </ReactModal>
   );
};