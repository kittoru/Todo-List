import { useState } from "react";
import ReactModal from "react-modal";


export const Modal = ({ status, close, getData, text }) => {
  const [value, setValue] = useState(text);
  const handelClick = (e) => {
    e.preventDefault();
    getData(value);
    close();
  };
  return ( 
    <ReactModal isOpen={status} onRequestClose={close}>
        <form>
          <input type="text" value={value} onInput={(e) => setValue(e.target.value)}/>
          <button onClick={handelClick}>save</button>
        </form>
    </ReactModal>
   );
};