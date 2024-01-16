const express = require("express");
const router = express.Router();

// Require controller modules.
const expenseController = require("../controller/ExpenseController");


router.post("/expense",expenseController.addExpenses);
router.get("/expense", expenseController.getExpenses);

//export
module.exports = router;