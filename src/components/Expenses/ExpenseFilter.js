import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterYearHndler = (event) => {
    const filteredYear = event.target.value;
    props.onSaveFilteredYear(filteredYear);
  };
  return (
    <div className="expenses_filter">
      <div className="expenses_filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterYearHndler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
