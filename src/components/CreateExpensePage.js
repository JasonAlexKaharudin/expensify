import React from "react";
import ExpenseForm from "./ExpenseForm";

const CreateExpensePage = () => {
    return (
        <>  
            <header className="mx-28 pt-12">
                <h1 className="text-3xl">Create Expense</h1>
            </header>           
            <ExpenseForm formType={'Create'}/> 
        </>
    )
}

export default CreateExpensePage;