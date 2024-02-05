import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const WdywExpense = () => {
  const navigate = useNavigate();
  const AddExpenses= ()=>{
    navigate('/AddExpenses');
  }
  const ListExpenses= ()=>{
    navigate('/ListExpenses');
  }
  const AddExpensesCatagory= ()=>{
    navigate('/AddExpenseCat');
  }
  return (
    <div>
        <h1>What do you want to do?</h1>
        <br /><br /><br />
        <Button variant='outlined' color='primary' onClick={AddExpensesCatagory}>Add Expenses Catagory</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='outlined' color='primary' onClick={AddExpenses}>Add Expenses</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='outlined' color='primary' onClick={ListExpenses}>List Expenses</Button>

       
    </div>
  )
}
