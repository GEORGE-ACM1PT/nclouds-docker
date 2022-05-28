const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
var sequelize ;
var flag=true;

while(flag)
{
 try {
  sequelize=
  new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  });
  flag =false
 } catch (error) {
   
 }
}


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
module.exports = db;