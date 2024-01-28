const Schema = require("../model/ExpenseModel");
const tokenutil = require("../util/TokenUtil");

const addExpenses = (req,res) => {
    var expenseObj = {
        id:req.body.id,
        name:req.body.name,
        status:req.body.status,
    }
    var token = tokenutil.generateToken(expenseObj);
    const expense = new Schema(expenseObj);
    expense.save().then((data) => {
        res.status(201).json({
            message: "Data has been saved",
            success: true,
            data: data
        })
    }
    ).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
        console.log(err);   
    })
};


const getExpenses = (req,res) => {

    console.log(Schema);
    Schema.find().populate().populate().then((data)=>{
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
    Schema.find({User_id: req.params.id}).then((data)=>{
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

const getExpenseByToken = (req,res) => {   
    var token = req.body.token;
    var user = tokenutil.validateToken(token);
    console.log(user);
    Schema.findById(user.id).then((data)=>{
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
    deleteExpenseById,
    getExpenseByToken
}