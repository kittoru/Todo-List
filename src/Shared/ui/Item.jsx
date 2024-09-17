import { useState } from "react";
import ReactModal from "react-modal";


export const Item = ( {id, text, status, onCheck, toggleStatus, updateTask } ) => {
  const [value, setValue] = useState(text);
  const [modal, setModal] = useState(false);
  const deleteTask = () => {
    onCheck(id);
  };
  const handelClick =(e) => {
    e.preventDefault();
    updateTask({id, text: value});
    closeModal();
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
      <ReactModal isOpen={modal} onRequestClose={closeModal}>
        <form>
          <input type="text" value={value} onInput={(e) => setValue(e.target.value)}/>
          <button onClick={handelClick}>save</button>
        </form>
      </ReactModal>
    </li>
   );
}