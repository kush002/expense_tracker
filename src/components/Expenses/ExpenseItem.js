import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense_item">
        <ExpenseDate date={props.date} />
        <div className="expense_item__description">
          <h2>{props.title}</h2>
          <div className="expense_item__price">Rs.{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
