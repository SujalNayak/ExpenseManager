import React from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Login = () => {
    const { register, handleSubmit} = useForm();
    const submitHandler = async(data) => {

      const formData = new FormData();  
      formData.append("email", data.email);
      formData.append("password", data.password);
      try{
      const res = await axios.post("http://localhost:3002/user/loginenc", data)
      console.log(res.data);

      localStorage.setItem('token', res.data.token);

      toast.success("LogIn Successfull!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}
      catch(err){
        console.log(err);
      }
      
    };
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" {...register("email")}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" {...register("password")}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
