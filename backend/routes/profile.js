const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {

db.query("SELECT * FROM profile LIMIT 1", (err, result) => {

if (err) {
console.log(err);
return res.status(500).send("Database error");
}

res.json(result[0]);

});

});

router.put("/", (req,res)=>{

const {name,bio,skills} = req.body

db.query(
"UPDATE profile SET name=?, bio=?, skills=? WHERE id=1",
[name,bio,skills],
(err,result)=>{

if(err) return res.send(err)

res.json("updated successfully")

})

})

module.exports = router;