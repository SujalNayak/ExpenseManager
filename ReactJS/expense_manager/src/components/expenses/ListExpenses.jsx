import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Button, Grid, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export const ListExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    // alert(id);
    const loadExpenses = async () => {
        const id = localStorage.getItem("id");
        try {
            if (id !== undefined || id != null) {
                const res = await axios.get(
                    `http://localhost:3002/expenseSubCat/expenseSubCat/${id}`
                );
                // console.log(res.data.data);
                console.log(res.data);
                setExpenses(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const deleteExpense = async () => {
        const id = localStorage.getItem("id");
        await axios.delete(
            `http://localhost:3002/expenseSubCat/expenseSubCat/${id}`
        );
        loadExpenses();
    };
    const updateExpense = async () => {
        const id = localStorage.getItem("id");
        await axios.put(
            `http://localhost:3002/expenseSubCat/expenseSubCat/${id}`
        );
        loadExpenses();
    };
    useEffect(() => {
        loadExpenses();
        // loadExpenseCat();
    }, []);

    const loadExpenseCat = async (id) => {
        const res = await axios.get(
            `http://localhost:3002/expense/expense/${id}`
        );
        console.log(res.data.data);
        setExpenses(res.data.data);
        return res.data.data.name;
    };

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

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const labels = {
        0.5: "Useless",
        1: "Useless+",
        1.5: "Poor",
        2: "Poor+",
        2.5: "Ok",
        3: "Ok+",
        3.5: "Good",
        4: "Good+",
        4.5: "Excellent",
        5: "Excellent+",
    };
    const getLabelText = (value) => {
        return labels[value];
    };


    return (
        <div>
            <h2>List Expenses</h2>
            <table class="table table-striped table-hover table-bordered border-primary table-responsive-md text-center">
                <thead>
                    <tr>
                        <th scope="col">Expense</th>
                        <th scope="col">Ammount</th>
                        {/* <th scope="col">Status</th> */}
                        <th scope="col">Action</th>
                        {/* <th>Rating</th> */}
                    </tr>
                </thead>
                <tbody>
                    {expenses?.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>

                            <td>{expense.ammount}</td>
                            <td>
                                <Button
                                    id="button-edit"
                                    variant="outlined"
                                    color="primary"
                                    onClick={updateExpense}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={deleteExpense}
                                >
                                    Delete
                                </Button>
                            </td>
                            {/* <td>
                                <Rating
                                    name="hover-feedback"
                                    value={value}
                                    precision={0.5}
                                    getLabelText={getLabelText}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={
                                        <StarIcon
                                            style={{ opacity: 0.55 }}
                                            fontSize="inherit"
                                        />
                                    }
                                />
                                {value !== null && (
                                    <Box sx={{ ml: 2 }}>
                                        {labels[hover !== -1 ? hover : value]}
                                    </Box>
                                )}
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
