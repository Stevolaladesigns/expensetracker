import React, { useContext } from 'react'
import { AppContext } from '../assets/AppContext'

function Remaining() {
  const {expenses, budget} =useContext(AppContext)

  const totalExpenses = expenses.reduce((total, item)=>{
    return (total =total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger': 'alert-success';
  return (
    <div className={`alert ${alertType}`}>
    <span>Remaining: GHC{budget-totalExpenses}</span>
    </div>
  )
}

export default Remaining