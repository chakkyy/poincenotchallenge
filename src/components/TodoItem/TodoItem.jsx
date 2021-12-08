import React, { useRef } from "react";
import { toggleTodo, removeTodo, updateTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { KEY } from "../../constants";

export function TodoItem({ todo }) {
  const { text, completed } = todo;

  const dispatch = useDispatch();
  const inputRef = useRef(true);

  const toggleToDo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      dispatch(updateTodo({ id, item: value }));
      localStorage.setItem(KEY, JSON.stringify(value));
      inputRef.current.disabled = true;
    }
  };

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggleToDo} />
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={text}
        onKeyPress={(e) => update(todo.id, inputRef.current.value, e)}
      />
      <button onClick={handleRemoveTodo}>Delete</button>

      <button
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => changeFocus()}
      >
        Edit
      </button>
    </li>
  );
}
