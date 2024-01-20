import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { Login } from '../users/Login';
import { useState } from 'react';


const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            setIsAuth(true);
        }
        else{
            setIsAuth(false);
        }
    }, [])
    return isAuth;
}

export const ProtectedRoutes = () => {
    const auth = useAuth();
  return auth == true ? <Outlet/>: <Login/>; 
}
