// (function (exports, require, module, __filename, __dirname){        //function wrapper
console.log(__filename);
console.log(__dirname);
const url='http://mylogger.io/log'
function log(message){
    console.log(message);
}
module.exports=log;
// module.exports.log=log;
// exports.log=log;   we can't do it, because this exports reffered to module.exports
// exports=log         so reference can't change

// })