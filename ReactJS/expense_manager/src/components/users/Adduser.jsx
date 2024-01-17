import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
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
    
    const res = await axios.post("http://localhost:3002/user/userenc", data)
    console.log(res.data);
    
  };
  toast.success("User Added Successfully!", {
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
    {/* <div class="dropdown-menu"> */}
  <form class="px-4 py-3" onSubmit={handleSubmit(submitHandler)}>
  <div class="form-group">
      <label for="exampleDropdownFormEmail1">Id</label>
      <input type="number" class="form-control" placeholder="id" {...register("id")}></input>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">First Name</label>
      <input type="text" class="form-control" placeholder="First Name" {...register("fname")}></input>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Last Name</label>
      <input type="text" class="form-control" placeholder="Last Name" {...register("lname")}></input>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" placeholder="email@example.com" {...register("email")}></input>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" placeholder="Password" {...register("password")}></input>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Mobile No.</label>
      <input type="number" class="form-control" {...register("mobile_no")}></input>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Status</label>
      <select {...register("status")}>
              <option>Active</option>
              <option>Inactive</option>
            </select>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Already User? Login</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
// </div>
  );
};

{/* <div>
      <h1>ADD USER</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="id">Id: </label>
            <input
              type="number"
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
    </div> */}