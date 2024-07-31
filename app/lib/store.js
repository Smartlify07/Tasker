import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todosReducer,
    },
  });
};
