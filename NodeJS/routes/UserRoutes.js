const express = require("express");
const router = express.Router();

// Require controller modules.
const userController = require("../controller/UserController");

// router.post("/user",userController.addUser);
router.get("/user", userController.getUsers);
router.put("/user/:id", userController.updateUser);
router.delete('/user/:id', userController.removeUser);
router.post('/user', userController.addUserWithEncryption);
router.post('/loginwithenc', userController.loginWithEnc);

//export
module.exports = router;