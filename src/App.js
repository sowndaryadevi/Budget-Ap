import React from "react"
import AddExpense from "./Components/AddExpense";
import { AppProvider } from "./Components/Appcontext";
import Budget from "./Components/Budget";
import ExpenseList from "./Components/ExpenseList";
import Remaining from "./Components/Remaining";
import Spend from "./Components/Spend";
function App() {
  return (
  <AppProvider>
    <div className="con">
      <h1>My Budget Planner</h1>
      <div className="container">
        <Budget />
        <Remaining />
        <Spend />
      </div>
      <h2 className="list">Expenses</h2>
      <ExpenseList/>
      <h2 className="add-expense">Add Expenses</h2>
      <AddExpense />
    </div>
  </AppProvider>
  );
}

export default App;
