import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

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
    
    const res = await axios.post("http://localhost:3002/user/user", formData)
    console.log(res.data);
    
  };

  return (
    <div>
      <h1>ADD USER</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="id">Id: </label>
            <input
              type="text"
              name="id"
              id="id"
              {...register("id")}
            />
          </div>
          <div>
            <label htmlFor="fname">First Name: </label>
            <input type="text" {...register("fname")}/>
          </div>
          <div>
            <label htmlFor="lname">Last Name: </label>
            <input type="text" {...register("lname")}/>
          </div>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input type="email" {...register("email")}/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" {...register("password")}/>
          </div>
          <div>
            <label htmlFor="mobile_no">Mobile No: </label>
            <input type="number" {...register("mobile_no")}/>
          </div>
          <div>
            <label htmlFor="Status">Status: </label>
            <select {...register("status")}>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            </div>
          <div>
            <input type="submit" value="Save User" />
          </div>
        </form>
      </div>
    </div>
  );
};