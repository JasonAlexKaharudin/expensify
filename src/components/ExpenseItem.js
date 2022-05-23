import React, { useContext } from "react";
import ExpenseContext from "../context/ExepenseContext";
import { Link } from "react-router-dom";

const ExpenseItem = ({ id, title, amount, type, date }) => {
    const { dispatch } = useContext(ExpenseContext);

    const removeExpense = () =>{
        dispatch({ type:'REMOVE_EXPENSE', title: title })
    }

    return(
        <div className="pt-5 pr-32">
            <div className="flex flex-row justify-between">
                <Link to={`/edit/${id}`}>
                    <h1 className="font-bold text-xl pr-3">{ title }</h1>
                </Link>
                
                <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={removeExpense}
                >
                    X</button>
            </div>            
            <p className="text-md">{ type }</p>
            <p className="text-md">${ amount }</p>
            <p className="text-sm">{ date }</p>
        </div>
    )
}

export default ExpenseItem;