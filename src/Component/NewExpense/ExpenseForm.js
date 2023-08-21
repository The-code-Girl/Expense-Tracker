import React, { useState } from 'react'
import './ExpenseForm.css';

export default function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // const inputChangeHandler = (idetifier, value) => {
    //     if (idetifier === 'title'){
    //         setEnteredTitle(value);
    //     }else if(idetifier === 'date'){
    //         setEnteredDate( value);
    //     }else{
    //         setEnteredAmount(value);
    //     }
    // }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExepnsedata(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2023-07-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions' >
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
    )
}
