const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSubCatSchema = new Schema({
    id: {type : String, required : true},
    name:{ type:String },
    status: {type: String , default :"Active"},
    User_id: {type: Schema.Types.ObjectId, ref: 'UserModel'},
});

module.exports= mongoose.model("ExpenseSubCatModel" , ExpenseSubCatSchema);