
// ==============  Weather-CLI.js | Composed by John Kim | Univeristy of Richmond  ============================= 

let keys = require('./user_View.js');
let fs = require('fs');

let commandType = process.argv[2];
let 

// ================================  | get data method | =================

let logIt = "##";
for(let i = 2; i < process.argv.length; i++) {
    logIt += process.argv[i] + "###";
}
logIt = logIt.substring(0, logIt.length - 1);

fs.appendFile("log.txt", logIt, function(error) {
    if(error) {
        console.log("External logging error: " + error);
    }
});