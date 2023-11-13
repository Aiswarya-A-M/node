//asynchronously file read
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    res.end();
})
server.listen(1080,"localhost",()=>{             //this take time,so hi will print first
    console.log("listening on port 5000 ")
})
fs.readFile('textfile.txt','utf-8',function(err,data){    //utf-8 Returns any remaining input stored in the internal buffer as a string. 
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})
console.log("hi")