const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    fname:{ type:String },
    lname:{ type:String } ,
    email: {type:String ,required:true , unique:true} , 
    password: {type:String , required:true} ,
    mobile_no: {type:Number , unique:true, required:true} ,    
    status: {type: String , default :"Active"}
});


module.exports= mongoose.model("UserModel1" , UserSchema);

