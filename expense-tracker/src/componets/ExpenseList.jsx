import React, {useContext} from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../assets/AppContext';


function ExpenseList() {
  const {expenses} = useContext(AppContext);
    
  return (
    <ul className='list-group'>
        {expenses.map(((expenses)=>(
         <ExpenseItem 
         id={expenses.id}
          name= {expenses.name} 
          cost={expenses.cost}/>
        )))}
    </ul>
  )
}

export default ExpenseList;