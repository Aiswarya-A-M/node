const http=require("http");
const path=require("path");
const fs=require("fs");
console.log(path.parse(__dirname))
const filePath=path.join(
    __dirname,
    "./public/index.html"
);
console.log(filePath);
const server=http.createServer((req,res)=>{
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.writeHead(404)
            res.end(err.message)
        }
        res.writeHead(200);
        res.end(data);
    })
    
});
server.listen(5000,"localhost",()=>{
    console.log("listening on port 5000 ")
})