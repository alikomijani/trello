import "./app.style.scss";
import TodoProvider from "./context/Todo/TodoProvider";
import CardList from "./components/CardList/CardList";
import CategoryProvider from "./context/Categories/CategoryProvider";
function App() {
  return (
    <CategoryProvider>
      <TodoProvider>
        <div className="App">
          <CardList />
        </div>
      </TodoProvider>
    </CategoryProvider>
  );
}

export default App;
