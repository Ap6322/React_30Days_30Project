import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WlcmMSg from "./components/WlcmMSg";

function App() {
  const [todoItems,setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems,{name : itemName, dueDate : itemDueDate}];
    setTodoItems(newTodoItems);
  }
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item=>item.name!== todoItemName);
    setTodoItems(newTodoItems)
    // console.log(`Item Deleted : ${todoItemName}`)
  }
  return (
    <div className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem = {handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WlcmMSg></WlcmMSg>}
      <TodoItems todoItems = {todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
    </div>
  );
}

export default App;
