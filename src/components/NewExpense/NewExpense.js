import React, { useState } from "react";
import "./NewExpense.css";
import ExpeseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };
  const hideFormHanler = () => {
    setShowForm(false);
  };
  const savedExpenseDataHandler = (expenseData) => {
    props.onAddExpense(expenseData);
    setShowForm(false);
  };
  return (
    <div className="new_expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpeseForm
          onHideForm={hideFormHanler}
          onSaveExpenseData={savedExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
