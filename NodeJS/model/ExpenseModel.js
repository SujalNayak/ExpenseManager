const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({

    id: {type : String, required : true},
    name:{ type:String },
    status: {type: String , default :"Active"},
    catagory: {type: Schema.Types.ObjectId, ref: 'CatagoryModel'},
});

module.exports= mongoose.model("ExpenseModel" , ExpenseSchema);