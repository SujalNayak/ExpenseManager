const zod = require("zod");
const userValidationSchema = zod.object(
    {
    body: zod.object({
        id: zod.string().min(3).max(255),
        fname: zod.string().min(3).max(255),
        lname: zod.string().min(3).max(255),
        email: zod.string().email(),
        password: zod.string().min(8).max(255),
        mobile_no: zod.string().min(10).max(10),
        status: zod.string().min(3).max(255),
    }).strict(),
    
})
module.exports = userValidationSchema;