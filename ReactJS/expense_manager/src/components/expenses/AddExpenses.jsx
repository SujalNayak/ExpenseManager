import React from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddExpenses = () => {
  
    const {register,handleSubmit} = useForm();
    const submitHandler = async(data) => {
        const formData = new FormData();  
        formData.append("id", data.id);
        formData.append("name", data.name);
        formData.append("status", data.status);
      
      const res = await axios.post("http://localhost:3002/expense/expense", data)
      console.log(res.data);
      
    };
    toast.success("Expense Added Successfully!", {
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
    <div class="dropdown">
        {/* <h1>Add Expenses</h1> */}
        <form onSubmit={handleSubmit(submitHandler)}>
        <div data-mdb-input-init class="form-outline mb-4">
        <input type="text" id="form7Example1" class="form-control" placeholder='id' {...register("id")} />
        {/* <label class="form-label" for="form7Example1">id</label> */}
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
        <input type="text" id="form7Example2" class="form-control" placeholder='Expense Catagory'{...register("name")} />
        {/* <label class="form-label" for="form7Example2">Expense Catagory</label> */}
        </div>

        <div class="form-group">
      <label for="exampleDropdownFormEmail1">Status:  </label>
      <select {...register("status")}>
              <option>Active</option>
              <option>Inactive</option>
            </select>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
  )
}
