const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSubCatSchema = new Schema({
    name: { type: String },
    status: { type: String, default: "Active" },
    
    User_id: { type: Schema.Types.ObjectId, ref: "ExpenseModel" },
});

module.exports = mongoose.model("ExpenseSubCatModel", ExpenseSubCatSchema);
