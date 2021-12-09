import React, { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.scss";
import { AnimatePresence, motion } from "framer-motion";

export function TodoList({ todos }) {
  const [sort, setSort] = useState("all");

  return (
    <div className="grid__main">
      <div className="grid__buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("uncompleted")}
        >
          Uncompleted
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
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
        </AnimatePresence>
      </ul>
      <div className="grid__tasksleft">
        {todos.filter((todo) => !todo.completed).length} tasks to finish! ✨
      </div>
    </div>
  );
}
