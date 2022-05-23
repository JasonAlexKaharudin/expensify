import React, { useContext } from "react";
import ExpenseContext from "../context/ExepenseContext";
import ExpenseForm from "./ExpenseForm";
import { useParams } from "react-router-dom";

const EditExpensePage = () => {
    const { expenses } = useContext(ExpenseContext);

    const params = useParams();    
    const currentExpense = expenses.find(expense => expense.id === params.id);

    return (
        <>
            <header className="mx-28 pt-12">
                <h1 className="text-3xl">Edit Expense</h1>        
            </header>  
            <ExpenseForm formType={'Edit'} currentExpense={currentExpense}/> 
        </>
    )
}

export default EditExpensePage;