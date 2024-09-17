import { useState } from "react";
import ReactModal from "react-modal";


export const ItemModal = ( { status, text, closeModal } ) => {
  const [value, setValue] = useState(text);
  return ( 
      <ReactModal isOpen={status} onRequestClose={closeModal}>
        <form>
          <input type="text" value={value} onInput={(e) => setValue(e.target.value)}/>
          <button onClick={closeModal}>save</button>
        </form>
      </ReactModal>
   );
}