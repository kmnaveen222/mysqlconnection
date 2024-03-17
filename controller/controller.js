const express = require("express");
router=express.Router();
const db=require("./dbconnection");


// router.get('',(req,res)=>{
//     res.send("list of emp");
// })



// router.get('/',(req,res)=>{
//     db.query("select * from Programmer")
//     .then(data=>res.send(data))
//     .catch(err=>console.log(err))
    
// })





router.get('/', (req, res) => {
    // Wrap db.query() in a Promise
    const queryPromise = new Promise((resolve, reject) => {
        db.query("SELECT * FROM Programmer", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

    // Handle the Promise result
    queryPromise
        .then(data => res.send(data))
        .catch(err => console.error(err));
});





// db.query('SELECT * from Programmer', (err, results, fields) => {
//     if (err) {
//         console.error('Error executing query:', err);
//         return;
//     }
//     console.log('Query results:', results);
//     // Handle results here
// });


module.exports=router;