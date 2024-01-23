import React from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, TextField } from '@mui/material';


export const Login = () => {
    const { register, handleSubmit} = useForm();
    const submitHandler = async(data) => {

      const formData = new FormData();  
      formData.append("email", data.email);
      formData.append("password", data.password);
      try{
      const res = await axios.post("http://localhost:3002/user/loginwithenc", data)
      console.log(res.data);

      localStorage.setItem('token', res.data.token);
      // localStorage.setItem('user', res.data.user);
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
     console.log(token);

     console.log("Login Successful");
      }
      catch(err){
        console.log(err);
      }
      
    };
  return (
    <div>
        <h2>Login</h2>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" {...register("email")} /><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" {...register("password")} /><br /><br />
        <Button type="submit" variant="outlined" onClick={handleSubmit(submitHandler)}>Submit</Button>
    </div>
  )
}
