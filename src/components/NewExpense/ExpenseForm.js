import { useState } from "react";
import "./ExpenseForm.css";

const ExpeseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const enteredAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const enteredDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitExpenseHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitExpenseHandler}>
      <div className="new_expense__controls">
        <div className="new_expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={enteredTitleHandler}
          />
        </div>
        <div className="new_expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={enteredAmountHandler}
          />
        </div>
        <div className="new_expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={enteredDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onHideForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpeseForm;
