import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import "../Master.css";

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AddUser = () => {
  const { register, handleSubmit} = useForm();
  const submitHandler = async(data) => {

    const formData = new FormData();  
    formData.append("id", data.id)
    formData.append("fname", data.fname);
    formData.append("lname", data.lname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("mobile_no", data.mobile_no);
    formData.append("status", data.status);
    
    const res = await axios.post("http://localhost:3002/user/user", data);
    console.log(res.data);
    
    toast.success('User Added Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });

  };

  const [value, setValue] = React.useState('Active');
  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div class="dropdown">
      <h2>Add User</h2>
 
  <TextField id="outlined-basic" label="First Name" variant="outlined" {...register("fname")} /><br /><br />
  <TextField id="outlined-basic" label="Last Name" variant="outlined" {...register("lname")} /><br /><br />
  <TextField id="outlined-basic" label="E-mail" variant="outlined" {...register("email")} /><br /><br />
  <TextField id="outlined-basic" label="Password" variant="outlined" {...register("password")} /><br /><br />
  <TextField id="outlined-basic" label="Mobile Number" variant="outlined" {...register("mobile_no")} /><br /><br />
  <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
    {...register("status")}
  >
    <FormControlLabel value="Active" control={<Radio />} label="Active" />
    <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
  </RadioGroup>
</FormControl><br /><br />
  <Button type="submit" variant="outlined" onClick={handleSubmit(submitHandler)}>Submit</Button>
  <ToastContainer />
</div>
  );
};