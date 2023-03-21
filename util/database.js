const Sequelize=require('sequelize');

const sequelize=new Sequelize('expense-tracker','root','Dhruv@2808',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;