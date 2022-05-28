const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
var sequelize ;
var flag=true;
const db = {};
while(flag)
{
 try {
  sequelize=
  new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  });
  db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
  flag =false
 
 } catch (error) {
   
 }
}




module.exports = db;