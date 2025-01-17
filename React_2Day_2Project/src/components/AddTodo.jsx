import React, { useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import "./AddTodo.css"


const AddTodo = ({onNewItem}) => {
  const [todoName,setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange =(e) => {
    setDueDate(e.target.value);
  };
  const handleAddBtn = () => {
    onNewItem(todoName,dueDate); 
    setDueDate("");
    setTodoName("");   
  }
  return (
    <div>
      <div className="container text-center">
        <div className="row row-1">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here"
            value={todoName} onChange={handleNameChange}/>
          </div>
          <div className="col-4">
            <input type="date" onChange={handleDateChange} value={dueDate}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success item-btn" onClick={handleAddBtn}>
            <RiAddCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
