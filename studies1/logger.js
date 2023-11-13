// const url='http://mylogger.io/log';
// function log(message){
//     //send an http request
//     console.log(message);           // all the module will be exported
// }
// module.exports.log=log; 

const url='http://mylogger.io/log';
function log(message){
    //send an http request
    console.log(message);           // only the function will be exported
}
module.exports = log; 
