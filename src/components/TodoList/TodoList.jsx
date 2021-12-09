import React, { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.scss";

export function TodoList({ todos }) {
  const [sort, setSort] = useState("all");

  return (
    <div className="grid__main">
      <div className="grid__buttons">
        <button onClick={() => setSort("all")}>All</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("uncompleted")}>Uncompleted</button>
      </div>
      <ul>
        {/* for uncompleted items */}
        {todos.length > 0 && sort === "uncompleted"
          ? todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem key={item.id} todo={item} />
                )
              );
            })
          : null}
        {/* for completed items */}
        {todos.length > 0 && sort === "completed"
          ? todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem key={item.id} todo={item} />
                )
              );
            })
          : null}
        {/* for all items */}
        {todos.length > 0 && sort === "all"
          ? todos.map((item) => {
              return <TodoItem key={item.id} todo={item} />;
            })
          : null}
      </ul>
      <div className="grid__tasksleft">
        {todos.filter((todo) => !todo.completed).length} tasks to finish! ✨
      </div>
    </div>
  );
}
