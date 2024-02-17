const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSubCatSchema = new Schema({
    name: { type: String },
    ammount:{type:Number},
    // status: { type: String, default: "Active" },
    User_id: {type: Schema.Types.ObjectId, ref: 'UserModel1', required: true}
    // User_id: { type: Schema.Types.User_id, ref: "ExpenseModel" },
});

module.exports = mongoose.model("ExpenseSubCatModel", ExpenseSubCatSchema);
