import React, { useState } from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Expenses from "./components/Expenses";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { ExpenseProps } from "./components/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState<ExpenseProps[]>([]);

  const addExpense = (newExpense: ExpenseProps) => {
    setExpenses([...expenses, newExpense]);
  };
  const deleteExpense = (index: number) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/overview">
            <Overview expenses={expenses} />
          </Route>
          <Route path="/expenses">
            <Expenses
              expenses={expenses}
              addExpense={addExpense}
              deleteExpense={deleteExpense}
            />
          </Route>
          <Route />
        </Switch>
      </Router>
  );
};

export default App;
