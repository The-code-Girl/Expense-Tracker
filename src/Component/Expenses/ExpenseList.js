import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList(props) {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback '>Found no expense.</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.items.map(expenses => (<ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />))};
        </ul>
    );



}
