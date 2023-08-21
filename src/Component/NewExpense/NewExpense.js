import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setEditingHandler(false);
    };
    const setEditingHandler = () => {
        setIsEditing(true);
    };
    const cancelEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={setEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExepnsedata={saveExpenseDataHandler} onCancel={cancelEditingHandler} />}
        </div>
    )
}
