
import { useState } from "react";


export const Form = ( {handelTaskAdd} ) => {
  const [value, setValue] = useState('');

  const handelClick = (e) => {
    e.preventDefault();
    handelTaskAdd(value);
  }

  return ( 
    <form className="form" onSubmit={handelClick}>
      <input type="text" onInput={(e) => setValue(e.target.value)}/>
      <button type="submit" >Add</button>
    </form>
   );
}