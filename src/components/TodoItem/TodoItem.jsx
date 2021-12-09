import React, { useRef } from "react";
import {
  toggleTodo,
  removeTodo,
  updateTodo,
  completeTodo,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { KEY } from "../../constants";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import "./TodoItem.scss";

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

  const handleCompleteTodo = () => {
    dispatch(completeTodo(todo.id));
  };

  return (
    <li className="card__container">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={text}
        onKeyPress={(e) => update(todo.id, inputRef.current.value, e)}
      />
      <div className="card__btnscontainer">
        <button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {""}
          <AiFillEdit />
          {""}
        </button>
        {!completed && (
          <button onClick={handleCompleteTodo} style={{ color: "green" }}>
            <IoCheckmarkDoneSharp />
          </button>
        )}

        <button onClick={handleRemoveTodo} style={{ color: "red" }}>
          <IoClose />
        </button>
      </div>
      {todo.completed && <span className="card__completed">done✨</span>}
    </li>
  );
}
