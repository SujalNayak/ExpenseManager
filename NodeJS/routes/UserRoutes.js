const express = require("express");
const router = express.Router();

// Require controller modules.
const userController = require("../controller/UserController");

router.post("/user",userController.addUser);
router.get("/user", userController.getUsers);
router.put("/user/:id", userController.updateUser);
router.delete('/user/:id', userController.removeUser);
router.post('/userenc', userController.addUserWithEncryption);

//export
module.exports = router;