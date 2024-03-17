const express = require("express");
const bodyparser=require("body-parser");//handle easy way to json format data's
const mysql=require("mysql");

const app =express(); 
const port=process.env.port || 5000;
require('dotenv').config();

app.use(bodyparser.json());


const db=require('./controller/dbconnection');
emproutes=require('./controller/controller');

// console.log(emproutes);
app.use('/api/data',emproutes);

//sql connection
// const con = mysql.createConnection({
//     host: 'b0cwjwxemzzttql2vvug-mysql.services.clever-cloud.com',
//     user: 'uhlkojaaaoinjjti',
//     password: 'yWI7cAGPrOSNasy0OhzV',
//     database:'b0cwjwxemzzttql2vvug'
//   });

// const con=mysql.createPool({
   
//     host : process.env.HOST,
//     user : process.env.USER,
//     password : process.env.PASS,
//     database : process.env.NAME,
// });

// //check db connection
db.getConnection(function(err){
    if(err){
        console.log("error : "+err);
    }
    else{
    console.log("conncection successfully")}

})



//listen port
app.listen(port,()=>{
    console.log("listening port:"+port);
})