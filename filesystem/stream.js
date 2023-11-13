const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const stream=fs.createReadStream('textfile.txt');
    stream.pipe(res);
})
server.listen(3000,"localhost",()=>{             //this take time,so hi will print first
    console.log("listening on port 3000 ")})
