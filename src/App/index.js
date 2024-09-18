import { useDispatch, useSelector } from 'react-redux';
import { EmptyList, Form, Item } from '../Shared';
import './Styles/index.scss';
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
  const updateTask = (newTask) => {
    dispatch(actions.updateTask(newTask));
  }
  return (
    <div className="container">
      <div className="content">
        <Form handelTaskAdd={handelTaskAdd} />
        <ul className="list">
          {count > 0 && tasks.map((task) => {
            return <Item text={task.text} id={task.id} status={task.status} onCheck={handelTaskDone} toggleStatus={toggleStatus} updateTask={updateTask}/>
          })}
          {count === 0 && <EmptyList/>}
        </ul>
      </div>
    </div>
  );
}

export default App;
