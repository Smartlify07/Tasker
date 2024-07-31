import { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  fetchTodos,
  selectAllLocalTodos,
  selectAllTodos,
} from "./features/todos/todosSlice";
import axios from "axios";

export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
export const useAppStore = useStore.withTypes();

export const useTodos = () => {
  const todos = useAppSelector(selectAllTodos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return { todos };
};
