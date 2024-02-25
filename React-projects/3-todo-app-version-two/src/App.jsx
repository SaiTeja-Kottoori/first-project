import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";

import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this Video",
      dueDate: "Right Now.",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
