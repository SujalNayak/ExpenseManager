import { React, useState, useEffect } from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ListUser = () => {
    
    const [users, setUsers] = useState([]);
    const loadUsers = async() => {
        const res = await axios.get("http://localhost:3002/user/user");
        console.log(res.data.data);
        setUsers(res.data.data);
    }
    useEffect(() => {
        loadUsers();
    }, []);
    toast.success("Users Listed Successfully!", {
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
    <div> <h2>List User</h2>
        <table class="table table-striped table-hover table-bordered border-primary table-responsive-md text-center">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Status</th>

        </tr>
    </thead>
    <tbody>
        {users.map((user, index) => (
        <tr key={index}>
            <td>{user.id}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.email}</td>
            <td>{user.mobile_no}</td>
            <td>{user.status}</td>
        </tr>
        ))}
    </tbody>
    </table>
    </div>
  )
}
