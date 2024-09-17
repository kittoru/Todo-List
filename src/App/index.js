import { useDispatch, useSelector } from 'react-redux';
import { Form, Item } from '../Shared';
import './index.scss';
import { actions } from './Store/task/task.slice';


function App() {
  const count = useSelector(state => state.task.count)
  const tasks = useSelector(state => state.task.list);
  const dispatch = useDispatch();


  const handelTaskDone = (id) => {
    dispatch(actions.remoteTask(id));
  }
  const handelTaskAdd = (value) => {
    dispatch(actions.addTask(value));
  }
  const toggleStatus = (id) => {
    dispatch(actions.toggleCompletedStatus(id));
  }
  return (
    <div className="App">
      <Form handelTaskAdd={handelTaskAdd} />
      <ul>
        {count > 0 && tasks.map((task) => {
          return <Item text={task.text} id={task.id} status={task.status} onCheck={handelTaskDone} toggleStatus={toggleStatus}/>
        })}
        {count === 0 && <p>No tasks</p>}
      </ul>
    </div>
  );
}

export default App;
