const express = require("express");
const router = express.Router();

// Require controller modules.
const expenseController = require("../controller/ExpenseController");


router.post("/expense",expenseController.addExpenses);
router.get("/expense", expenseController.getExpenses);
router.get("/expense/:id", expenseController.getExpenseById);
router.put("/expense/:id", expenseController.updateExpenseById);
router.delete("/expense/:id", expenseController.deleteExpenseById);

//export
module.exports = router;