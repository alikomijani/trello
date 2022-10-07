import React from "react";
import { TodoContext } from "../../context/Todo/TodoProvider";
import { CategoryContext } from "../../context/Categories/CategoryProvider";
import Card from "../Card/Card";
import Todo from "../Todo/Todo";
import "./card-list.style.scss";
import { categoryActions } from "../../context/Categories/category.reducer";
const CardList = () => {
  const { toDoList } = React.useContext(TodoContext);
  console.log(toDoList);
  const { categoryDispatch, categoryList } = React.useContext(CategoryContext);
  const handleAddCard = () => {
    const title = prompt("enter card title");
    categoryDispatch({ type: categoryActions.add, payload: { title: title } });
  };
  return (
    <div className="CardList">
      {categoryList.map((category) => (
        <Card title={category.title} key={category.id} id={category.id}>
          {toDoList
            .filter((item) => item.category === category.id)
            .map((todo) => (
              <Todo
                id={todo.id}
                key={todo.id}
                title={todo.title}
                description={todo.description}
              />
            ))}
        </Card>
      ))}
      <div>
        <button onClick={handleAddCard}>add new card</button>
      </div>
    </div>
  );
};

export default CardList;
