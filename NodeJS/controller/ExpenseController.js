const Schema = require("../model/ExpenseModel");

const addExpenses = (req,res) => {
    const expense = new Schema(req.body);
    expense.save().then((data) => {
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
};

const getExpenses = (req,res) => {

    console.log(Schema);
    Schema.find().then((data)=>{
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

//get expense by id
const getExpenseById = (req,res) => {
    Schema.findById(req.params.id).then((data)=>{
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

//update expense by id
const updateExpenseById = (req,res) => {
    Schema.findByIdAndUpdate(req.params.id,req.body).then((data)=>{
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

//delete expense by id  
const deleteExpenseById = (req,res) => {
    Schema.findByIdAndDelete(req.params.id).then((data)=>{
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


//exports

module.exports = {
    addExpenses,
    getExpenses,
    getExpenseById,
    updateExpenseById,
    deleteExpenseById
}