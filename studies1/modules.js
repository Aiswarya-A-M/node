// console.log(module)
// const logger=require ('./logger');
// console.log(logger);
// // logger();
// logger.log("message")       //all module exported as object


// const logger=require ('./logger');
// logger("message")
const log=require ('./logger');
const wrapper=require ('./modulewrapper');
log("message")

const path=require('path')  // node path enna built in function ndonn nokkum
const pathObj=path.parse(__filename);                           // if  no app related modules nokkum (/..path)
console.log(pathObj);

const EventEmitter=require('events');   //class defines the properties
const emitter= new EventEmitter();
emitter.on('messageLogged',function(){
    console.log("Listener emitter called")
})                               //like addeventlistener


emitter.emit('messageLogged');          //making a noise emit meaning
//emitter.on('messageLogged',function(arg){     //emmitter argument can be given
//emitter.emit('messageLogged',{id:1,url:'http://'}); 



const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("hello world");
        res.end();
    }
    if(req.url==='/api/course'){
            res.write(JSON.stringify([1,2,3]));
            res.end();
        }

});      //inherit from net server
// server.on('connection',(socket)=>{
//     console.log("new connection")
// })
server.listen(5000);
console.log('Listening on port ')       // create an event