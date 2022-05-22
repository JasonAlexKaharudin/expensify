import React, { useState } from "react";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([])

    return(
        <section className="ml-44">
            <h1 className="underline">Expense List</h1>
        </section>
    )
}

export default ExpenseList;