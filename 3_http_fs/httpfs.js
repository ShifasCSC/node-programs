const http = require("http");
const fs = require("fs");
const { error } = require("console");
const app = http.createServer((req,res)=>{
fs.readFile("index.html",(error,data)=>{
    res.write(data);
    res.end();
})
})
app.listen(3001);