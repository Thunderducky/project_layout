require("dotenv").config();

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "chirpy"
});

connection.connect(function(err){
    if(err){
        throw err;
    }
    console.log("Connected as id: " + connection.threadId);
})

module.exports = connection;