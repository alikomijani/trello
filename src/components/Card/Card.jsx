import React, { useContext } from "react";
import "./card.style.scss";
import { CategoryContext } from "../../context/Categories/CategoryProvider";
import { TodoContext } from "../../context/Todo/TodoProvider";
import { todoActions } from "../../context/Todo/todo.reducer";
import { categoryActions } from "../../context/Categories/category.reducer";
function Card({ children, title, id }) {
  const { todoDispatch } = useContext(TodoContext);
  const { categoryDispatch } = useContext(CategoryContext);
  const handleUpdate = () => {
    const newTitle = prompt("enter todo title", title);
    categoryDispatch({
      type: categoryActions.update,
      payload: { id, title: newTitle },
    });
  };
  const handleAddTodo = () => {
    const title = prompt("enter todo title");
    const description = prompt("enter todo title");
    todoDispatch({
      type: todoActions.add,
      payload: {
        title,
        description,
        category: id,
      },
    });
  };
  const handleDelete = () => {
    categoryDispatch({
      type: categoryActions.remove,
      payload: {
        id,
      },
    });
    todoDispatch({
      type: todoActions.removeByCategory,
      payload: {
        category: id,
      },
    });
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("todoID");
    todoDispatch({
      type: todoActions.update,
      payload: {
        id: +data,
        category: id,
      },
    });
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} className="Card">
      <div className="Card__header">
        <h5>{title}</h5>
        <div className="Card__controller">
          <p onClick={handleAddTodo}>+</p>
          <p onClick={handleDelete}>-</p>
          <p onClick={handleUpdate}>update</p>
        </div>
      </div>
      <div className="Card__content">{children}</div>
    </div>
  );
}

export default Card;
