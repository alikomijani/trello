import React, { createContext, useReducer } from "react";
import todoReducer from "./todo.reducer";
import { todoList } from "../../db";
export const TodoContext = createContext({
  todoList: [],
  todoDispatch: () => {},
});

const TodoProvider = ({ children }) => {
  const [toDoList, todoDispatch] = useReducer(todoReducer, todoList);
  return (
    <TodoContext.Provider
      value={{
        toDoList,
        todoDispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
