const { error, log } = require("console");
const fs = require("fs");
//write file
// fs.writeFile("message.txt","hi my team",(error)=>{
//     if (error)
//     {
//         console.log("unable to write");
        
//     }
// })

//append file
// fs.appendFile("message.txt","_ready to work",(error)=>{
//     if(error){
//         console.log("unable to write");
        
//     }
// })

//read file
// fs.readFile("message.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log("unable to read file");
//         }

//         else{
//         console.log("data");
        
//         }

// });

//delete file
// fs.unlink("message.txt",(error)=>{
//     if(error){
//         console.log("unable to delete");

//     }
    
// })

//create folder
// fs.mkdir("hello",(error)=>{
//     if(error){
//         console.log("unable to create folder");
        
//     }
// })

//fetch files from the folder
fs.readdir("hello",(error,data)=>{
    if (error) {
        console.log("unable access the file");
        
    }else{
console.log(data);

    }
})
