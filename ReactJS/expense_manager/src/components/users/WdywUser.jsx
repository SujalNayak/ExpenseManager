import React from 'react'
import { Link } from 'react-router-dom'



export const WdywUser = () => {
  return (
    <div>WdywUser
        <h1>What do you want to do?</h1>
        
        <button type="button" class="btn btn-primary btn-success">
        <Link className="nav-link" to="/AddUser">
              Add User
            </Link>
          </button><br /><br />
        <button type="button" class="btn btn-primary btn-success">
        <Link className="nav-link" to="/ListUser">
              List User
            </Link>
          </button><br /><br />
    </div>
  )
}
