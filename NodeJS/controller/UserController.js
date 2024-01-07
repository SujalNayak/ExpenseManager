const userSchema = require("../model/UserModel");
const express = require("express");
const mongoose = require("mongoose");

const getUsers = (req,res) => {
    // Get all users from the database and send them back to the client
    console.log(userSchema);
    userSchema.find().then((data)=>{
        res.status(200).json({
            message:"success",
            success:true,
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"error",
            error:err
        })
    });

}

const addUser = (req,res) => {
    const user = new userSchema(req.body);
    //save user data
    user.save().then((data) => {
        res.status(201).json({
            message: "Data has been saved",
            success: true,
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
        console.log(err);   
    })
}

//export
module.exports=
{
    addUser,
    getUsers
};