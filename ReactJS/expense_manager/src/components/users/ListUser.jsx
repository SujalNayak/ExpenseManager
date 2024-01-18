import { React, useState, useEffect } from 'react'
import axios from "axios";
import "../Master.css";
import { Button } from '@mui/material';
export const ListUser = () => {
    
    const [users, setUsers] = useState([]);
    const loadUsers = async() => {
        const res = await axios.get("http://localhost:3002/user/user");
        console.log(res.data.data);
        setUsers(res.data.data);
    }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3002/user/user/${id}`);
        loadUsers();
    }
    const updateUser = async id => {
        await axios.put(`http://localhost:3002/user/user/${id}`);
        loadUsers();
    }

    useEffect(() => {
        loadUsers();
    }, []);
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
            <th scope="col">Action</th>

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
            <td>
                <Button id='button-edit' variant="outlined" color="primary" onClick={updateUser}>Update</Button>
                <Button variant="outlined" color="error" onClick={deleteUser}>Delete</Button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
    </div>
  )
}
