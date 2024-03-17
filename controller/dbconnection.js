const mysql=require("mysql");


const con=mysql.createPool({
    
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASS,
    database : process.env.NAME,
});

//check db connection

module.exports=con;
