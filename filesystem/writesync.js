const fs =require('fs')
try{
    const fileData=fs.writeFileSync('textfile.txt','hi dear');
    console.log("created successfully")
}catch(e){
    console.error(e);
}