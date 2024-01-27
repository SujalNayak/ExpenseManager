const express = require("express");
const router = express.Router();

// Require controller modules.
const userController = require("../controller/UserController");


router.get("/user", userController.getUsers);
router.put("/user/:id", userController.updateUser);
router.delete('/user/:id', userController.removeUser);
router.post('/user', userController.addUserWithEncryption);
router.post('/loginwithenc', userController.loginWithEnc);
router.post('/user/token', userController.getUserByToken);


//export
module.exports = router;