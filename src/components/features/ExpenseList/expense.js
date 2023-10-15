import React from "react";
import style from "./style.css";
const Expense = ({ expense, getEditData, deleteExpense }) => {
  const editHandler = () => {
    console.log(expense);
    getEditData(expense);
  };

  const deleteHandler = () => {
    deleteExpense(expense.id);
  };
  return (
    <li>
      <div className='date'>
        <h4>Date</h4>
        {expense.date}
      </div>
      <div>
        <h4>Title</h4>
        {expense.title}
      </div>
      <div>
        <h4>Price</h4>${expense.price}
      </div>
      <button type='button' onClick={editHandler} className='button'>
        Edit
      </button>
      <button type='button' onClick={deleteHandler} className='button'>
        Delete
      </button>
    </li>
  );
};

export default Expense;
