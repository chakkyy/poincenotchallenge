import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";

export function AddTodo() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    if (input === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div>
      <input
        value={input}
        onChange={handleInputChange}
        type="text"
        placeholder="Add Todo.."
      />
      <button onClick={handleAddTodo}>➕</button>
    </div>
  );
}
