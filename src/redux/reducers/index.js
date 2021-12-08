import {
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  RESET_LIST,
} from "../actions/actionTypes";
import { KEY } from "../../constants";

const storedTodos = JSON.parse(localStorage.getItem(KEY));

const initialState = {
  isEditing: true,
  todos: storedTodos || [],
};

export const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id, text, completed: false }],
      };
    }
    case UPDATE_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, text } : todo
        ),
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }
    case RESET_LIST: {
      return {
        ...state,
        todos: [],
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
};
