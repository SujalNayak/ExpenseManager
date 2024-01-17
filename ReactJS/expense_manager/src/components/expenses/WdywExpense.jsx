import React from 'react'
import { Link } from 'react-router-dom'

export const WdywExpense = () => {
  return (
    <div>
        <h1>What do you want to do?</h1>
        
        <button type="button" class="btn btn-primary btn-success">
        <Link className="nav-link" to="/AddExpense">
              Add Expenses
            </Link>
          </button><br /><br />
        <button type="button" class="btn btn-primary btn-success">
        <Link className="nav-link" to="/ListExpenses">
              List Expenses
            </Link>
          </button><br /><br />
    </div>
  )
}
