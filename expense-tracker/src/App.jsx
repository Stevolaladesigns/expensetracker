import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './componets/Budget';
import Remaining from './componets/Remaining';
import TotalSpent from './componets/TotalSpent';
import ExpenseList from './componets/ExpenseList';
import AddExpenseForm from './componets/AddExpenseForm';
import { AppProvider } from './assets/AppContext';


function App() {


  return (
    <AppProvider>
<div className='container'>
        <h1 className='mt-3'>Expense Tracker App</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <TotalSpent />
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='col-sm'>
          <ExpenseList />
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='col-sm'>
          <AddExpenseForm />
        </div>


      </div>
    </AppProvider>

      

  


  )
}

export default App
