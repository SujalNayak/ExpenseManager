const userSchema = require("../model/UserModel");
const mailer = require("../util/NodeMailer");
const multer = require("multer");
const passwordUtil = require("../util/PaswordUtil");
const tokenutil = require("../util/TokenUtil");
const { get } = require("mongoose");

const getUsers = (req, res) => {
    console.log(userSchema);
    userSchema
        .find()
        .then((data) => {
            res.status(200).json({
                message: "success",
                success: true,
                data: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "error",
                error: err,
            });
        });
};

const addUserWithEncryption = async (req, res) => {
    const userObj = {
        id: req.body.id,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: await passwordUtil.encryptPassword(req.body.password),
        mobile_no: req.body.mobile_no,
        status: req.body.status,
    };
    const user = new userSchema(userObj);
    var token = tokenutil.generateToken(userObj);

    user.save()
        .then((data1) => {
            console.log("1");

            mailer
                .sendMail(
                    req.body.email,
                    req.body.fname,
                    "This is the Mail from Sujal Nayak",
                    "This is test mail from nodejs"
                )
                .then((data) => {
                    res.status(201).json({
                        message: "Data has been saved",
                        success: true,
                        data: data1,
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "error",
                        error: err,
                    });
                });
        })
        .catch((err) => {
            console.log("2");

            console.log(err);
        });
};

const getUserByToken = async (req, res) => {
    // token = req.headers.authorization.split(" ")[1];
    token = req.body.token;
    try {
        // Validate and decode the token
        const decoded = tokenutil.validateToken(token);
    console.log(decoded);
        // Find the user by id
        const user = await userSchema.findById(decoded._id);
        console.log(user);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        // Send the user data
        res.status(200).json({
            message: "success",
            success: true,
            data: user,
        });
        console.log("Token is valid");
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "error",
            error: err,
        });
    }
};

//update user
const updateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    userSchema
        .findByIdAndUpdate(id, user)
        .then((data) => {
            res.status(200).json({
                message: "success",
                success: true,
                data: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "error",
                error: err,
            });
        });
};

//delete user
const removeUser = (req, res) => {
    const id = req.params.id;
    userSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.status(200).json({
                message: "success",
                success: true,
                data: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "error",
                error: err,
            });
        });
};

const loginWithEnc = async (req, res) => {
    var { email, password } = req.body;

    try {
        const user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid Credentials",
                success: false,
            });
        }

        const isMatch = await passwordUtil.comparePassword(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Credentials",
                success: false,
            });
        }
        console.log(user.toObject());
        const token = tokenutil.generateToken(user.toObject());
        // getUserByToken(token);
        res.status(200).json({
            message: "success",
            success: true,
            data: user,
            token: token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "error",
            error: err,
        });
    }
};

//export
module.exports = {
    getUsers,
    updateUser,
    removeUser,
    addUserWithEncryption,
    loginWithEnc,
    getUserByToken,
};
