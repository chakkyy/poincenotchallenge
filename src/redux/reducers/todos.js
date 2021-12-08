import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/actionTypes";
import { KEY } from "../../constants";

const storedTodos = JSON.parse(localStorage.getItem(KEY));

const initialState = {
  todos: storedTodos || [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id, text, completed: false }],
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    }
    default:
      return state;
  }
}
