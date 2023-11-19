const express =require("express");
const app =express();
app.use(logger)         // it should call any .get or .post method because here app.use is globally scoped

app.get("/",auth,(req,res)=>{
   res.send("here");
   console.log('homepage')
})

// app.use(logger)     if app.use is here, it won't call it and do not print log because this get methods do not have next()

app.get("/users",(req,res)=>{
    console.log("aiswarya")
    res.send("at user");
})

function logger(req,res,next){
    console.log("log");
    next()
}

// function auth(req,res,next){
//     console.log("at auth");
//     next()
// }

function auth(req,res,next){
    console.log("at auth");
    if(req.query.admin === 'true'){
        next();
    }else{
        res.send('no auth')
        next();
    }
}

app.listen(5000,()=>{
    console.log("port is running")
});