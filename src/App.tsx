import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todo';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos,setTodo] = useState<Todo[]>([])

  const removeHandler =(todoid:string)=>{
    setTodo((prevTodos)=>{
      return prevTodos.filter(todo=>todo.id!==todoid)
    })
    
  }

  const addToHandler=(todoText:string)=>{
    const newTodo =new Todo(todoText);

    setTodo((prevTodo)=>{
      return prevTodo.concat(newTodo);
    })
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={addToHandler}/>
      <Todos  items={todos} onRemoveTodo={removeHandler}/>
    </div>
  );
}

export default App;
