const mongoose = require("mongoose");
const express = require("express");
const { number } = require("zod");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({


    name:{ type:String },
    status: {type: String , default :"Active"},
    catagory: {type: Schema.Types.ObjectId, ref: 'ExpenseModel'},
    User_id: {type: Schema.Types.ObjectId, ref: 'UserModel1'},
});

module.exports= mongoose.model("ExpenseModel" , ExpenseSchema);