import React from "react";
import "./TodoItem.css";
import { MdDelete } from "react-icons/md";


const TodoItem = ({todoName, todoDate,onDeleteClick}) => {
  return (
    <>
      <div className="container">
        <div className="row row-1">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger item-btn" onClick={() => onDeleteClick(todoName)}>
            <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
