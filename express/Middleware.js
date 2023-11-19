// const morgan=require("morgan");
// app.use(express.json()) //(here it return a another function thats why we use() thi to call that function)
// app.use(morgan())  // this is not a middleware function they are going to return middleware function
const express=require("express");
const morgan = require("morgan");
const app=express();

const logger=function(req,res,next){
    console.log("custom middleware called")
    next()
}

const logger1=function(req,res,next){
    console.log("custom middleware1 called")
    next()
}

app.use(morgan('dev'));
app.use(logger1)        // in this order middleware function will be executed..if this is defined after route method it won't applied to url with that route
app.use(logger)

app.get("/user",fakeAuth,(req,res)=>{
   res.send("here");           // response send so this means no middleware after this won't executed.
   console.log('at user')
})

function fakeAuth(req,res,next){
    const auth=true
    if(auth === true){
        console.log(`the response is ${auth}`)
        res.send("everything is ok")
        
    }else{
        res.send('no auth')
        
    }
}




app.listen(5000,()=>{
    console.log("port is running")
});