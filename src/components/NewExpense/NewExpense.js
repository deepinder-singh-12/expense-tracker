import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };

    props.onAddExpense(expenseData);
    stopEditingHandler();
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onExpenseDataSave={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
