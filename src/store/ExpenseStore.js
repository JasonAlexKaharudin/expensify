import React, { useReducer } from "react";
import ExpenseReducer from "../reducers/ExpenseReducer";
import ExpenseContext from "../context/ExepenseContext";

const initState = JSON.parse(localStorage.getItem('expenses')) || [];

const ExpenseProvider = ({ children }) => {
    const [ expenses, dispatch ] = useReducer(ExpenseReducer, initState)

    return(
        <ExpenseContext.Provider value={{ expenses, dispatch }}>
            { children }
        </ExpenseContext.Provider>
    )
}

export default ExpenseProvider;