import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems,onDeleteClick}) => {
  return (
    <div>
      {todoItems.map((item) => ( 
      <TodoItem key = {item.name} todoName={(item.name)} todoDate={item.dueDate} onDeleteClick = {onDeleteClick}></TodoItem>))}
    </div>
  );
};
export default TodoItems
