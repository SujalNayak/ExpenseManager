const ExpenseSubCatModel = require("../model/ExpenseSubCatModel.js");

const addExpenseSubCat = (req,res) => {
    const expenseSubCat = new ExpenseSubCatModel(req.body);
    expenseSubCat.save().then((data) => {
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

const getExpenseSubCat = (req,res) => {
    
        console.log(ExpenseSubCatModel);
        ExpenseSubCatModel.find().then((data)=>{
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
const getExpenseSubCatById = (req,res) => {
    ExpenseSubCatModel.findById(req.params.id).then((data)=>{
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
    addExpenseSubCat,
    getExpenseSubCat,
    getExpenseSubCatById
}