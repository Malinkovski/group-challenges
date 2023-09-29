import React from "react";
import { Bar } from "react-chartjs-2";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ExpenseProps } from "./Expenses";
import categories from "../data/categories";

const Overview = ({ expenses }: { expenses: ExpenseProps[] }) => {
  const labelArray = categories.map((category) => category.name);

  const dataArray = labelArray.map((label) => {
    let amount = 0;
    expenses.forEach((expense) => {
      if (expense.category === label) {
        amount += expense.amount;
      }
    });
    return amount;
  });

  const data = {
    labels: labelArray,
    datasets: [
      {
        label: "Amount",
        data: dataArray,
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
      },
    },
  };

  return (
    <div className="container">
      <div className="row">
        {console.log(dataArray)}
        {dataArray.some((amount) => amount > 0) ? (
            <Bar data={data} options={options} />
        ) : (
          <h2>
            There are no entries to display,<br></br> please go to{" "}
            <Link to="/expenses">expenses</Link> page.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Overview;
