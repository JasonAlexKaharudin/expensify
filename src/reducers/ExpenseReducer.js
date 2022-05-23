const ExpenseReducer = ( state, action ) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.newExpense
            ]
        case 'EDIT_EXPENSE':                        
            return state.map((expense) => {                 
                if (expense.id === action.id){                
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.title !== action.title)
        default:
            return state
    }
}

export default ExpenseReducer;