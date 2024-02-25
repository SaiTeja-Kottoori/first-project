import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && (
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      )}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItems}
      ></TodoItems>
    </center>
  );
}

export default App;
