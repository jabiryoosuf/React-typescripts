import React from "react";
import Todo from "../models/todo";
import TodoItems from "./TodoItems";
import classes from "./Todo.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id:string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null,item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
