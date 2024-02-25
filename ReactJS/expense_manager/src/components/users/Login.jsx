import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
//import index.css
import "../../index.css";

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const submitHandler = async (data) => {
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.password);
        try {
            const res = await axios.post(
                "http://localhost:3002/user/loginwithenc",
                data
            );
            console.log(res.data);

            localStorage.setItem("token", res.data.token);
            // localStorage.setItem('user', res.data.user);
            const user = localStorage.getItem("user");
            const token = localStorage.getItem("token");
            console.log(token);
            var tokenObj = {
                token: token,
            };
            const res1 = await axios.post(
                "http://localhost:3002/user/user/token",
                tokenObj
            );
            console.log("from token..", res1.data);
            localStorage.setItem("id", res.data?.data?._id);

            console.log("Login Successful");
            toast.success("Logged In Successfully!", {
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
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="my-5 border-solid border-5 border-sky-500">
            {/* <h1 className="mb-0.5 mt-0.5">Login</h1> */}
            <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                {...register("email")}
            />
            <br />
            <br />
            <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                {...register("password")}
            />
            <br />
            <br />
            <Button
                type="submit"
                variant="outlined"
                onClick={handleSubmit(submitHandler)}
            >
                Submit
            </Button>
            <ToastContainer />
            {/* Same as */}
            <ToastContainer />
            <br /><br />

            <Link to="/AddUser">
                Not a User? Sign Up here.
            </Link>
        </div>
    );
};
