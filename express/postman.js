const express =require("express");
const app =express();
app.get("/user",(req,res)=>{
    res.send("hlo world");
});
app.listen(4000);