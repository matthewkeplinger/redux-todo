import React from 'react';
import Input from './components/Input/Input';
import TodoItem from './components/TodoItem';
import './App.css';


const todoList = [{
  item: 'todo',
  done: false,
  id: 34324
}, {
  item: 'todo2',
  done: false,
  id: 34326
}]


function App() {
  return (
    <div className="App">
      <div className="app__container">
        <div className = "app__todoContainer">
        {
          todoList.map(item => (
              <TodoItem name={item.item} done={item.done} id={item.id}/>
          ))
        }
        </div>
      <Input />
      </div>
      {/* ToDo List */}
      

    </div>
  );
}

export default App;
