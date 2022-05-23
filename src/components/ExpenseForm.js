import React, { useContext, useState } from "react";
import ExpenseContext from "../context/ExepenseContext";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const ExpenseForm = ({ formType, currentExpense }) => {    
    const [ title, setTitle ] = useState( !currentExpense? '' : currentExpense.title );
    const [ amount, setAmount ] = useState(!currentExpense? 0 : currentExpense.amount );
    const [ type, setType ] = useState(!currentExpense? '' : currentExpense.type );
    const [ date, setDate ] = useState(!currentExpense? '' :currentExpense.date );

    const { dispatch } = useContext(ExpenseContext)
    const navigate = useNavigate()

    const addForm = (e) => {
        e.preventDefault();

        const newExpense = {
            id: uuid(),
            title,
            amount, 
            type, 
            date
        }
        
        dispatch({ type: 'ADD_EXPENSE', newExpense }) 

        navigate('/');
    };

    const editForm = (e) => {
        e.preventDefault();

        const updates = {
            title,
            amount, 
            type, 
            date
        }

        dispatch({ type:'EDIT_EXPENSE', id: currentExpense.id , updates })

        navigate('/');
    }

    return(
        <form className="mx-28 my-5">
            <div className="flex flex-col pb-10">
                <label className="mt-8">Expense Title:</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    value={title}
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="mt-8">Amount:</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <label className="mt-8">Type:</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    value={type}
                    type="text"
                    onChange={(e) => setType(e.target.value)}
                />
                <label className="mt-8">Date:</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    value={date}
                    type="text"
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>                
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={ formType === 'Create' ? addForm : editForm }
            >
                Submit
            </button>
        </form>
    )
}

export default ExpenseForm;