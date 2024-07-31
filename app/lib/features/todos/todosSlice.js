import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const initialState = {
  localTodos: JSON.parse(localStorage.getItem("todos")) || [],
  todos: [],
  todosStatus: "idle",
  todosError: null,
};

// fetch todos action
export const fetchTodos = createAsyncThunk("todos/get", async () => {
  const response = await axios.get(API_URL);
  const data = await response.data;

  return data;
});

export const createTodo = createAsyncThunk(
  "todos/addTodo",
  async (initialPost) => {
    try {
      const response = axios.post(API_URL, initialPost);

      return (await response).data;
    } catch (error) {
      return error.message;
    }
  }
);
export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async ({ title, completed, uuid }) => {
    try {
      const response = axios.put(`${API_URL}/${Number(uuid)}`, {
        completed,
        title,
      });
      console.log((await response).data);

      return { title, completed };
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async ({ uuid }) => {
    try {
      const response = axios.delete(`${API_URL}/${Number(uuid)}`);
      console.log(uuid);

      return { uuid };
    } catch (error) {
      return error.message;
    }
  }
);

const todosSlice = createSlice({
  name: " todos",
  initialState,
  reducers: {
    setLocalTodos: (state, action) => {
      state.localTodos = action.payload;
    },
    getLocalTodos: (state, action) => {
      state.localTodos = action.payload;
    },
    addLocalTodo: (state, action) => {
      const newTodo = {
        uuid: uuidv4(),
        dateCreated: Date.now(),
        ...action.payload,
      };

      state.localTodos.push(newTodo);

      localStorage.setItem("todos", JSON.stringify(state.localTodos));
    },

    editLocalTodo: (state, action) => {
      const updatedTodos = state.localTodos.map((todo) => {
        if (todo.uuid === action.payload.uuid) {
          return {
            ...todo,
            title: action.payload.title,
            completed: action.payload.completed,
          };
        } else {
          return todo;
        }
      });

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },

    deleteLocalTodo: (state, action) => {
      const updatedTodos = state.localTodos.filter(
        (todo) => todo.uuid !== action.payload.uuid
      );
      state.localTodos = updatedTodos;
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.todosStatus = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todosStatus = "fulfilled";
        const todosWithId = action.payload.map((todo) => ({
          dateCreated: 1722165469972, // set the date for the
          id: String(todo.id),
          uuid: String(todo.id),
          ...todo,
        }));
        state.todos = todosWithId;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.todosStatus = "rejected";
        state.todosError = action.error.message;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.todosStatus = "fulfilled";
        console.log(action.payload);
        const updatedTodos = state.todos.map((todo) =>
          todo.uuid === action.payload.uuid
            ? {
                ...todo,
                title: action.payload.title,
                completed: action.payload.completed,
              }
            : todo
        );
        state.todos = updatedTodos;
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.todosStatus = "rejected";
        state.todosError = action.error.message;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todosStatus = "fulfilled";
        console.log(action.payload);
        const updatedTodos = state.todos.filter(
          (todo) => todo.uuid !== action.payload.uuid
        );
        state.todos = updatedTodos;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.todosStatus = "rejected";
        state.todosError = action.error.message;
      });
  },
});

export const selectAllTodos = (state) => state.todos.todos;
export const selectAllLocalTodos = (state) => state.todos.localTodos;

export const selectTodosStatus = (state) => state.todosStatus;
export const selectTodosError = (state) => state.todosError;

export const { addLocalTodo, editLocalTodo, setLocalTodos, deleteLocalTodo } =
  todosSlice.actions;

export const loadLocalTodos = () => (dispatch) => {
  const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
  dispatch(setLocalTodos(localTodos));
};
export default todosSlice.reducer;
