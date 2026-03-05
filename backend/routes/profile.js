const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  res.json({
    name: "Rethika",
    bio: "Full Stack Developer",
    skills: "React, Node, Express",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  });
});

router.put("/", (req,res)=>{

const {name,bio,skills,linkedin,github} = req.body

db.query(
"UPDATE profile SET name=?, bio=?, skills=?, linkedin=?, github=?  WHERE id=1",
[name,bio,skills,linkedin,github],
(err,result)=>{

if(err) return res.send(err)

res.json("updated successfully")

})

})

module.exports = router;