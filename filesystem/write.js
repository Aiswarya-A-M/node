const fs=require('fs');
const data=fs.readFileSync('textfile.txt','utf-8');
console.log(data);
console.log('hi');
fs.writeFile('textfile.txt','I am fine',function(err){
    if(err){
        console.log("err")
    }else{
        console.log("created success");
    }
})