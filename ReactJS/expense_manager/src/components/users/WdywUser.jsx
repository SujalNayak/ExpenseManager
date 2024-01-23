import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';



export const WdywUser = () => {
  const navigate = useNavigate();
  const AddUser= ()=>{
    navigate('/AddUser');
  }
  const ListUser= ()=>{
    navigate('/ListUser');
  }
  return (
    <div>WdywUser
        <h1>What do you want to do?</h1>
        <br /><br /><br />
        <Button variant='outlined' color='primary' onClick={AddUser}>Add User</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='outlined' color='primary' onClick={ListUser}>List User</Button>
    </div>
  )
}
