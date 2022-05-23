import React, { useReducer } from "react";
import ExpenseReducer from "../reducers/ExpenseReducer";
import ExpenseContext from "../context/ExepenseContext";
import uuid from "react-uuid";

const sampleExpense = [
    {
        id: uuid(),
        title: 'In N Out',
        amount: 50.00,
        type: 'Food',
        date: '25th May'
    }
];

const initState = sampleExpense;

const ExpenseProvider = ({ children }) => {
    const [ expenses, dispatch ] = useReducer(ExpenseReducer, initState)

    return(
        <ExpenseContext.Provider value={{ expenses, dispatch }}>
            { children }
        </ExpenseContext.Provider>
    )
}

export default ExpenseProvider;