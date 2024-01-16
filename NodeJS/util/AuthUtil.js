const authutil =(req,res,next)=>{

    var token = req.headers.authorization
    console.log(token)
    if(token<5){

        if(token=="abcd"){
            next()
        }
        else{
            res.status(401).json({message:"Unauthorized"})
        }
        //next()

    }
    else{
        res.status(401).json({message:"Unauthorized"})
    }


}
module.exports = authutil