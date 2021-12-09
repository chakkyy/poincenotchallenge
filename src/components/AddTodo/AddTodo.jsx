import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoPlus } from "react-icons/go";
import { addTodo } from "../../redux/actions";
import Swal from "sweetalert2";
import "./AddTodo.scss";

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
    <div className="addtodo__container">
      <input
        value={input}
        className="addtodo__input"
        onChange={handleInputChange}
        type="text"
        placeholder="Add Todo..."
      />
      <button onClick={handleAddTodo} className="addtodo__btn">
        <GoPlus />
      </button>
      <br />
    </div>
  );
}
