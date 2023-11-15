const express =require("express");
const app =express();
app.set("view engine",'ejs');

app.get("/",(req,res)=>{
    console.log("here");
    //res.sendStatus(500);        // to pass internal server error at webpage
    // res.status(500).send("hi")  // in  console of page we get error at webpage show hi message
    // res.status(500).json({message:"error"});
    //res.json({message:"error"});    //no need to send error
    //res.download(express.js);
    res.render("index",{text:"world"})
})

const userRouter =require('./router/users');
app.use("/users",userRouter);

//here we need to access /user/name, /user/time. don't need to repeat user , we creater router folder and user.js file
//then app.use("/users",userRouter)

app.listen(3000);