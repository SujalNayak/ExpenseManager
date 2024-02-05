import { React, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import "../Master.css";
import { useEffect } from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";


export const AddExpenseCat = () => {
    const { register, handleSubmit } = useForm();
    // const [expenses, setExpenses] = useState([]);
    // const [expenses, setExpenses] = React.useState([]);

    const submitHandler = async (data) => {
        const expObj = Object.assign(data, {
            User_id: localStorage.getItem("id"),
        });

        const res = await axios.post(
            "http://localhost:3002/expense/expense",
            expObj,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        );
        console.log(res.data);
    };
    const [expenseCat, setExpenseCat] = useState([]);
    const loadExpenses = async () => {
        const res = await axios.get("http://localhost:3002/expense/expense");
        console.log(res.data.data);
        setExpenseCat(res.data.data);
        return res.data.data.name;
    };


    useEffect(() => {
        loadExpenses();
    }, []);

    // const [value, setValue] = React.useState("Active");
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    return (
        <div class="dropdown">
            <h2>Add Expenses Catagory</h2>
            <br />
            <br />
            <TextField
                id="outlined-basic"
                label="Expense Name"
                variant="outlined"
                {...register("name")}
            />
            <br />
            <br />
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                    Status
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={value}
                    // onChange={handleChange}
                    {...register("status")}
                >
                    <FormControlLabel
                        value="Active"
                        control={<Radio />}
                        label="Active"
                    />
                    <FormControlLabel
                        value="Inactive"
                        control={<Radio />}
                        label="Inactive"
                    />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <Button
                type="submit"
                variant="outlined"
                onClick={handleSubmit(submitHandler)}
            >
                Submit
            </Button>
        </div>
    );
};
