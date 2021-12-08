import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import Swal from "sweetalert2";

export function AddTodo() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    if (input === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must complete the text field before send!",
      });
      return;
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={handleInputChange}
        type="text"
        placeholder="Add Todo..."
      />
      <button onClick={handleAddTodo}>➕</button>
    </div>
  );
}
