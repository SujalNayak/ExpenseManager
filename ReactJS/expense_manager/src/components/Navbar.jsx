import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "./users/Login";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Option } from '@mui/base/Option';

export const Navbar = (props) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    // console.log(token);
    // if(!token){
    //   navigate('/');
    // }
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
                {props.title}
            </a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            Home <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/WdywUser">
                                Users
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/WdywExpense">
                                Expenses
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/PieChart">
                                Chart
                            </Link>
                        </li>
                    </ul>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    ></input>
                    <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => {
                            <Login />;
                        }}
                    >
                        LogIn
                    </button>
                    <button className="btn btn-outline-danger" onClick={logout}>
                        LogOut
                    </button>
                </form>
            </div>
        </nav>
    );
};

Navbar.propType = { title: PropTypes.string };

Navbar.defaultProps = {
    title: "Expense Manager",
};

export default Navbar;

{
    /* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/AddUser">
                Users
              </Link>
            </li>  
            </ul> */
}
