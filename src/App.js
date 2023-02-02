import React from 'react';
import {useState} from 'react';
import TodoList from './TodoList';

function App() {
  const [task, setTask]=useState("");
  const [todos, setTodos]=useState([]);
  const changeHandler=e=> {
      setTask(e.target.value)
  }
  const submitHandler=e=> {
    e.preventDefault();
    const newTodos=[...todos, task]
    setTodos(newTodos)
    setTask("")
  }
  const deleteHandler= (indexValue) => {
    const newTodos=todos.filter((todo, index)=> index!==indexValue)
    setTodos(newTodos)
  }
  return (
    <center>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">TODO APPLICATION</h2>
          <form onSubmit={submitHandler}>
            <input size="30" type="text" name="task" value={task} onChange={changeHandler}/> &nbsp;
            <input className='add' type="submit" name="add" value="Add"/>
          </form>
          <TodoList todolist={todos} deleteHandler={deleteHandler}/>
        </div>
      </div>
    </center>
  );
}

export default App;
