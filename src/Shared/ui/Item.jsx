

export const Item = ( {id, text, onCheck} ) => {
  const deleteTask = () => {
    onCheck(id);
  }
  return ( 
    <li key={id} className="item" onClick={deleteTask}>
      <input type="checkbox" />
      <label>{text}</label>
    </li>
   );
}