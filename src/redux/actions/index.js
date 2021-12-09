import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  UPDATE_TODO,
  RESET_LIST,
  COMPLETE_TODO,
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

export const updateTodo = (id, item) => ({
  type: UPDATE_TODO,
  payload: {
    id: id,
    item: item,
  },
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: {
    id: id,
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

export const resetList = () => ({
  type: RESET_LIST,
});
