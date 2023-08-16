import React from 'react';
import './App.css';
import Todos from './components/Todo';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const todos = [
    new Todo('jabir'),
    new Todo('kdlldfkl')
  ];

  const addToHandler=(todoText:string)=>{}
  return (
    <div className="App">
      <NewTodo onAddTodo={addToHandler}/>
      <Todos  items={todos}/>
    </div>
  );
}

export default App;
