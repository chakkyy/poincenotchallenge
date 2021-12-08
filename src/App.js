import React, { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { useSelector } from "react-redux";
import { KEY } from "./constants";
import { Title } from "./components/Title/Title";

export function App() {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Title />
      <AddTodo />
      <TodoList todos={todos} />
      <div>{todos.filter((todo) => !todo.completed).length} tasks left</div>
    </>
  );
}
