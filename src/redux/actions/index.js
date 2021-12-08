import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  EDIT_TODO,
} from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    text,
    completed: false,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload: {
    payload,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
