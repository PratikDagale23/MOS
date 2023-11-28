const express = require('express');
const app = express();
const mysql = require('mysql');
const cors=require('cors');
const bodyparser = require('body-parser');
app.use(bodyparser.json()); // Parse JSON bodies
app.use(cors());
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"student"
});
const sql = "insert into marks values('abcd',24,70,80,60,70,0)";
conn.query(sql,(err,result)=>
{
    if(err)
    console.log(err);
    console.log(result);
});
app.get("/stud",(req,res)=>
{
    conn.query("select * from marks",(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    });
})
app.post("/student",(req,res)=>
{
    const { name, rollno, DAA, CN, WT, SDM, total } = req.body;
    const values = [name, rollno, DAA, CN, WT, SDM, total];
    conn.query("Insert into marks VALUES(?,?,?,?,?,?,?)",values,(err,result)=>
    {
        if(err)
        console.log(err);
        console.log(result);
    });
}); 
app.use(express.json());

app.listen(8080,()=>
{
    console.log("connected to backend");
});
