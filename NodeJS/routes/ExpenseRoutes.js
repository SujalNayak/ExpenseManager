const express = require("express");
const router = express.Router();

// Require controller modules.
const expenseController = require("../controller/ExpenseController");


router.post("/expense",expenseController.addExpenses);
router.get("/expense", expenseController.getExpenses);
router.get("/expense/:id", expenseController.getExpenseById);
router.put("/expense/:id", expenseController.updateExpenseById);
router.delete("/expense/:id", expenseController.deleteExpenseById);

router.get('/expense', async (req, res) => {
    try {
      const userExpenses = await Expense.find({ user: req.user._id }).populate('category');
      res.json(userExpenses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
//export
module.exports = router;