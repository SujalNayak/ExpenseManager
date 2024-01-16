const bcrypt = require('bcrypt');

const encryptPassword = async(password) => {

    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const comparePassword = async(password,hashedPassword)=>{

    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log(isMatch);
    return isMatch;

}

module.exports = { encryptPassword, comparePassword };