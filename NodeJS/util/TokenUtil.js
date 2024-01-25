const jwt = require('jsonwebtoken');
const secret ="your-secret-key"

const generateToken = (user) => {

    const token = jwt.sign(user,secret,{
        //1 min
        expiresIn: '7d'

    })
    console.log(token)
    return token
}

const generateExpenseToken = (expense) => {
    const token = jwt.sign(expense,secret,{
        expiresIn: '7d'
    })
    console.log(token)
    return token
}



const validateToken = (token) => {

    try{

        const user = jwt.verify(token,secret)
        console.log(user)
        return user

    }catch(err){
        console.log(err)
    }

}



module.exports = {
    generateToken,
    validateToken,
    generateExpenseToken,
   
}
