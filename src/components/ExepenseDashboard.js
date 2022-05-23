import React from "react";
import ExpenseList from "./ExepenseList";

const ExpenseDashboard = () => {
  return (
    <>
      <header className="flex justify-center px-10 py-12">
        <h1 className="text-3xl font-bold">My Expenses</h1>            
      </header>
            
      <ExpenseList/>             
    </>
  )
}

export default ExpenseDashboard;