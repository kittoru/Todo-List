import { useState } from "react";
import ReactModal from "react-modal";
import { Modal } from "./Modal";


export const Item = ( {id, text, status, onCheck, toggleStatus, updateTask } ) => {
  const [value, setValue] = useState(text);
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
    <li key={id} className="item" >
      <input type="checkbox" onClick={() => toggleStatus(id)}/>
      <label className={status? 'item-completed' : ''}>{text}</label>
      <button onClick={deleteTask}>del</button>
      <button onClick={openModal}>Update</button>
      <Modal status={modal} close={closeModal} getData={handelClick} text={text} />
    </li>
   );
}