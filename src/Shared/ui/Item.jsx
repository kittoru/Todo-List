

export const Item = ( {id, text, status, onCheck, toggleStatus} ) => {
  const deleteTask = () => {
    onCheck(id);
  }
  return ( 
    <li key={id} className="item" >
      <input type="checkbox" onClick={() => toggleStatus(id)}/>
      <label className={status? 'item-completed' : ''}>{text}</label>
      <button onClick={deleteTask}>del</button>
    </li>
   );
}