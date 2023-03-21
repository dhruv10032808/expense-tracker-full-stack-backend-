const express=require('express');
const expenseController=require('../controllers/expenses')
const router=express.Router();

router.get('/get-expense',expenseController.getExpenses);

router.post('/add-expense',expenseController.postExpenses)

router.use(`/delete-expense/:userId`,expenseController.getDelete)

module.exports=router;