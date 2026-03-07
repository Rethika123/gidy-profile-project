const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "<your-mysql-password>",
  database: "profile_db"
});

db.connect((err)=>{
  if(err){
    console.log("Database connection failed:",err);
  }else{
    console.log("MySQL Connected");
  }
});

module.exports = db;