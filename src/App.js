import React from 'react';
import Input from './components/Input/Input';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';
import './App.css';



function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <div className="app__container">
      <h2>To Do List </h2>
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
