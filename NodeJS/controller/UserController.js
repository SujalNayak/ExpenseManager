const userSchema = require("../model/UserModel");

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
    //save user data
    user.save().then((data) => {
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
function updateUser(req,res){
    const id=parseInt(req.params.id);
    const updateInfo=req.body;
    const foundUser=userSchema.find(user=>user.id===id)
    if(!foundUser){
        return res.status(400).send("The user with the given ID was not found.")
        }
        let flag=false
        for(const key in updateInfo){
            if(updateInfo[key]!==""){
                flag=true
                foundUser[key]=updateInfo[key]
                }
                }
            if (!flag)
            {
                return res.status(600).send('At least one property must be changed')
            }
    return users.save().then(()=>{
        res.send(foundUser)
        }).catch((e)=>{
            console.log(e)
        })
}

//delete user
const removeUser = (req,res)=>{
    const id=parseInt(req.params.id);
    const userIndex = userSchema.findIndex(user=>user.id===id);
    if(userIndex===-1){
        return res.status(400).json({
            message:"No user with the given ID was found."
        })
    }
    const removedUser = userSchema[userIndex];
    userSchema.splice(userIndex,1);
    res.status(200).json({removedUser});
}


//export
module.exports=
{
    addUser,
    getUsers,
    updateUser,
    removeUser
};