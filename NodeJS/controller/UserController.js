const userSchema = require("../model/UserModel");
const mailer = require("../util/NodeMailer")
const multer = require("multer");
const password = require("../util/PaswordUtil");
const tokenutil = require("../util/TokenUtil");

  

const getUsers = (req,res) => {

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
    user.save().then((data) => {
        res.status(201).json({
            message: "Data has been saved",
            success: true,
            data: data
        }),
        mailer.sendMail(req.body.email,"This is the Mail from Sujal Nayak","This is test mail from nodejs").then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
        console.log(err);   
    })
};


const addUserWithEncryption = async(req,res) => {
    const userObj = {
        id:req.body.id,
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:await password.encryptPassword(req.body.password),
        mobile_no:req.body.mobile_no,
        status:req.body.status,
    }
    const user = new userSchema(userObj);
    var token = tokenutil.generateToken(userObj);
    user.save().then((data) => {
        res.status(201).json({
            message: "Data has been saved",
            success: true,
            data: data
        }),
        mailer.sendMail(req.body.email,"This is the Mail from Sujal Nayak","This is test mail from nodejs").then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
        console.log(err);   
    })
}

// const updateUser = (req,res) => {

//     const id = parseInt(req.params.id);
//     const userIndex = userSchema.findIndex(userSchema => userSchema.id === id);

//     if(userIndex === -1){
//         return res.status(400).json({message:'Invalid User ID'});
//     }
//     const updatedUser = req.body;
//     userSchema[userIndex] = updatedUser;
    
//     return res.status(200).json(userSchema[userIndex]);
// }

//update user
const updateUser = (req,res) => {

    const id = req.params.id;
    const user = req.body;
    userSchema.findByIdAndUpdate(id,user).then((data)=>{
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
    })
}

//delete user
const removeUser = (req,res) => {

    const id = req.params.id;
    userSchema.findByIdAndDelete(id).then((data)=>{
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
    })
}



//export
module.exports=
{
    addUser,
    getUsers,
    updateUser,
    removeUser,
    addUserWithEncryption
};