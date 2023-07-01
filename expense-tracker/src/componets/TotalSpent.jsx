import React, { useContext } from 'react'
import { AppContext } from '../assets/AppContext'

function TotalSpent() {
  const {expenses}=useContext(AppContext)

  const totalExpenses = expenses.reduce((total, item)=>{
    return (total += item.cost);
  }, 0)
  return (
    <div className="alert alert-primary">
        <span>Total Expenses So Far: GHC{totalExpenses}</span>
    </div>
  )
}

export default TotalSpent