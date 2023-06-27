import React from "react";
import "./ExpensesTable.css";
const ExpensesTable = (props) => {
  const tableDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    tableDataPoints[expenseMonth].value += expense.amount;
  }

  const monthlyExpenses = tableDataPoints.filter((month) => month.value > 0);

  console.log(monthlyExpenses);
  return (
    <table className="table-expenses">
      <tbody>
        <tr>
          {monthlyExpenses.map((expense) => (
            <th>
              <h4>{expense.label}</h4>
            </th>
          ))}
        </tr>
        <tr>
          {monthlyExpenses.map((expense) => (
            <td>
              <p>{parseInt(expense.value)}</p>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ExpensesTable;
