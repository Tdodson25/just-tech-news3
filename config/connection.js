// import the Sequelize concstructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
//const sequelize = new Sequelize(process.evn.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
// });
    

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news3_db', 'root', 'Zynspearmintcokezero25!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
