const Expense=require('../models/expense')
exports.getExpenses=(req,res,next)=>{
    Expense.findAll().then(result=>{
      res.status(201).json({newUserDetail:result})
      console.log(result)
    })
    .catch(err=>console.log(err))
  }

exports.postExpenses=(req,res,next)=>{
    Expense.create({
        expense:req.body.expense,
        description:req.body.description,
        category:req.body.category
    }).then(result=>{
        res.status(201).json({newUserDetail:result})
        console.log(result)
    })
    .catch(err=>console.log(err))
}

exports.getDelete=(req,res,next)=>{
    const userId=req.params.userId;
    Expense.destroy({where:{id:userId}}).then((result)=>{
       console.log(result)
       console.log('deleted')
    })
    .catch(err=>console.log(err))
}