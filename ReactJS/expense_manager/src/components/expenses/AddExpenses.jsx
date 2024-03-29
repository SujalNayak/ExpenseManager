import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
// import NumberInput from "material-ui-number-input";
// import { StyledInputRoot, StyledInputElement, StyledButton } from "material-ui-number-input";



import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  CustomButton,
  BaseNumberInput,
} from "@mui/material";

export const AddExpenses = () => {
  const { register, handleSubmit } = useForm();
  const [expenses, setExpenses] = React.useState([]);
  const [selectedExpense, setSelectedExpense] = React.useState("");
  const submitHandler = async (data) => {
      

const expObj = Object.assign(data,{User_id:localStorage.getItem("id")});
     
      const res = await axios.post(
        "http://localhost:3002/expenseSubCat/expenseSubCat", 
        expObj
        , 
        {
          headers: {
            'Authorization': "Bearer " + localStorage.getItem("token")
          }
        }
      );
      console.log(res.data);
  };
  const loadExpenses = async() => {
    const res = await axios.get("http://localhost:3002/expense/expense");
    console.log(res.data.data);
    setExpenses(res.data.data);
    return res.data.data.name;
}

const handleExpense = (event) => {
    console.log(event.target.value);
    setSelectedExpense(event.target.value);
};

useEffect(() => {
    loadExpenses();
}, []);

  const [value, setValue] = React.useState("Active");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div class="dropdown">
      <h2>Add Expenses</h2>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Expense</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedExpense}
          label="Expense"
          onChange={handleExpense}
        >
          {expenses.map((Expenses, index) => (
            <MenuItem key={index} value={Expenses._id}>{Expenses.name}</MenuItem>
          ))}
        </Select>
      </FormControl><br />
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
      <TextField
        id="outlined-basic"
        label="Ammount"
        variant="outlined"
        {...register("ammount")}
      />
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
