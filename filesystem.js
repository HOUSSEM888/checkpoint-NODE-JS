
const fs = require('fs');

fs.appendFile('welcome.txt',"hello Node ",function(err){
    err ? console.log('err',err):console.log("File saved")
})


fs.readFile('./welcome.txt',(err,data)=>{
    err ? console.log('err',err) : console.log('data',data.toString())
})
