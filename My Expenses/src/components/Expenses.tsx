import React, { useState } from "react";
import categories, { Category } from "../data/categories";

export interface ExpenseProps {
  category: string;
  amount: number;
  description: string;
}

interface ExpensesProps {
  expenses: ExpenseProps[];
  addExpense: (newExpense: ExpenseProps) => void;
  deleteExpense: (index: number) => void;
}

const Expenses = ({ expenses, addExpense, deleteExpense }: ExpensesProps) => {
  const [currentExpense, setCurrentExpense] = useState<ExpenseProps[]>([]);
  const [newExpense, setNewExpense] = useState<ExpenseProps>({
    category: "",
    amount: 0,
    description: "",
  });

  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewExpense({ ...newExpense, amount: +event.target.value });
  };

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewExpense({ ...newExpense, category: event.target.value });
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewExpense({ ...newExpense, description: event.target.value });
  };

  const handleAdd = () => {
    setCurrentExpense([...currentExpense, newExpense]);
    setNewExpense({ category: "", amount: 0, description: "" });
    addExpense(newExpense);
  };

  const handleDelete = (index: number) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const newExpenses = [...currentExpense];
      newExpenses.splice(index, 1);
      setCurrentExpense(newExpenses);
      deleteExpense(index);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Enter your expense</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map(({ amount, category, description }, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{amount}</td>
                  <td>{category}</td>
                  <td>{description}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <input
                    placeholder="Amount"
                    type="number"
                    className="form-control"
                    value={newExpense.amount}
                    onChange={handleAmount}
                  />
                </td>
                <td>
                  <select
                    title="select"
                    className="form-select custom-select"
                    value={newExpense.category}
                    onChange={handleCategory}
                  >
                    <option value="">Select</option>
                    {categories.map((category: Category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={newExpense.description}
                    onChange={handleDescription}
                    placeholder="Description"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={handleAdd}
                    disabled={!newExpense.category || !newExpense.amount}
                  >
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
