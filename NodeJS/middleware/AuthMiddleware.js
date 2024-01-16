const tokenUtil = require('../util/TokenUtil');
var count =0;
const validateUser =(req,res,next)=>{

    const token = req.headers.authorization;
    
    if(token){

        const user = tokenUtil.validateToken(token);
        console.log("iser object in validation tokemm",user);
        if(user){
            req.user = user;
            count++;
            console.log("object......",user,"-->",count,"call...");
            next();
        }
        else{

            res.status(401).json({
                message:"unauthorized"
            })
        }

    }
    else{
        res.status(401).json({
            message:"token not found"
        })
    }


}
module.exports = {validateUser};