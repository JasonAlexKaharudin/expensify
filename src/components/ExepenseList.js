import React, { useContext, useEffect } from "react";
import ExpenseContext from "../context/ExepenseContext";
import ExpenseItem from "./ExpenseItem";
import uuid from 'react-uuid'

const ExpenseList = () => {
    const { expenses } = useContext(ExpenseContext);

    useEffect(() => {
        console.log(expenses)
    }, [expenses])
    

    return(
        <section className="ml-44">
            <h1 className="underline">Expense List</h1>
            { expenses.map((expense) =>{
                return <ExpenseItem 
                            key={uuid()}    
                            id = {expense.id}                    
                            title = {expense.title}
                            amount={ expense.amount }
                            type={ expense.type }
                            date={ expense.date }
                        />
            })}            
        </section>
    )
}

export default ExpenseList;