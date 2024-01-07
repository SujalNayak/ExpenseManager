const express = require("express");
const router = express.Router();

// Require controller modules.
const userController = require("../controller/UserController");

router.post("/user",userController.addUser);
router.get("/user", userController.getUsers)
