import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "House Rent",
    amount: 16500,
    date: new Date(2023, 4, 22),
  },
  {
    id: "e2",
    title: "Shifting",
    amount: 16600,
    date: new Date(2023, 4, 29),
  },
  {
    id: "e3",
    title: "AC Uninstalling",
    amount: 2500,
    date: new Date(2021, 3, 2),
  },
  {
    id: "e4",
    title: "Milk",
    amount: 1500,
    date: new Date(2020, 2, 20),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseDataHandler = (dataSubmited) => {
    const expense = {
      ...dataSubmited,
      id: Math.random().toString(),
    };
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
