import React, { useContext } from "react";
import "./todo.style.scss";
import { TodoContext } from "../../context/Todo/TodoProvider";
import { todoActions } from "../../context/Todo/todo.reducer";
const Todo = ({ id, title, description }) => {
  const { todoDispatch } = useContext(TodoContext);
  const handleRemoveToDo = () => {
    todoDispatch({
      type: todoActions.remove,
      payload: { id },
    });
  };
  const handleUpdateTodo = () => {
    const newTitle = prompt("enter new title", title);
    const newDescription = prompt("enter new title", description);
    todoDispatch({
      type: todoActions.update,
      payload: { id, title: newTitle, description: newDescription },
    });
  };
  const handleOnDrag = (e) => {
    e.dataTransfer.setData("todoID", id);
  };
  return (
    <div draggable onDragStart={handleOnDrag} className="Todo">
      <div className="Todo__controller">
        <p onClick={handleUpdateTodo}>edit</p>
        <p onClick={handleRemoveToDo}>remove</p>
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Todo;
