import React, { useRef } from "react";

const NewTodo:React.FC<{onAddTodo: (text:string)=>void}> = (props) => {
    const todoTextinputref = useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
   const enteredText = todoTextinputref.current!.value;
    if(enteredText.trim().length === 0){
        //throw error
        return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextinputref} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
