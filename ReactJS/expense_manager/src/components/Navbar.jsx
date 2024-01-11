import React from 'react'
import PropTypes from 'prop-types'
import { Link,useNavigate } from 'react-router-dom'
// import { LoginUser } from '../components/Login'


export const Navbar = (props) => {
  // const navigate = useNavigate();
  // const logout= ()=>{
  //   localStorage.removeItem('token');
  //   navigate('/');
  // }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/AddUser">
                Users
              </Link>
            </li>  
            </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button className="btn btn-outline-success" onClick={()=>{<LoginUser/>}} >Login</button> */}
            {/* <button className="btn btn-outline-danger" onClick={()=>{logout()}}>Logout</button> */}
          </form>
        </div>
      </div>
    </nav>
  )
}
Navbar.propType = { title: PropTypes.string }

Navbar.defaultProps = {
  title: "Expense Manager"
}

export default Navbar;
      