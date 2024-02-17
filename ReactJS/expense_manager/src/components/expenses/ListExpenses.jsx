import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Grid } from '@mui/material';

export const ListExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    // alert(id);
    const loadExpenses = async() => {
        const id = localStorage.getItem("id");
        try{
        if(id !== undefined || id!= null ) {


        const res = await axios.get(`http://localhost:3002/expenseSubCat/expenseSubCat/${id}`);
        // console.log(res.data.data);
        console.log(res.data);
        setExpenses(res.data.data);
        }
    }catch(err){
        console.log(err);
    }
    }
    const deleteExpense = async () => {
        const id = localStorage.getItem("id");
        await axios.delete(`http://localhost:3002/expenseSubCat/expenseSubCat/${id}`);
        loadExpenses();
    }
    const updateExpense = async () => {
        const id = localStorage.getItem("id");
        await axios.put(`http://localhost:3002/expenseSubCat/expenseSubCat/${id}`);
        loadExpenses();
    }
    useEffect(() => {
        loadExpenses();
        // loadExpenseCat();
    }, []);

    const loadExpenseCat = async id => {
        const res = await axios.get(`http://localhost:3002/expense/expense/${id}`);
        console.log(res.data.data);
        setExpenses(res.data.data);
        return res.data.data.name;
    }

    toast.success("Expenses Listed Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });


    return (
    <div>
        <h2>List Expenses</h2>
        <table class="table table-striped table-hover table-bordered border-primary table-responsive-md text-center">
    <thead>
        <tr>
            <th scope="col">Expense</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {expenses?.map((expense, index) => (
        <tr key={index}>
            <td>{expense.name}</td>
            
            <td>{expense.status}</td>
           <td>
                <Button id='button-edit' variant="outlined" color="primary" onClick={updateExpense}>Update</Button>
                <Button variant="outlined" color="error" onClick={deleteExpense}>Delete</Button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
    </div>
  )
}
