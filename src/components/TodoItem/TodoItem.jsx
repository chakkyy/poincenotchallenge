import React from "react";
import { toggleTodo, removeTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";

export function TodoItem({ todo }) {
  const { text, completed } = todo;

  const dispatch = useDispatch();

  const toggleToDo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const editTodo = () => {
    //this function edit the name of the todo
  };

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggleToDo} />
      {text}
      <button onClick={handleRemoveTodo}>Delete</button>
    </li>
  );
}
