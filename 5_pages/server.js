const http=require("http");
const fs=require("fs");
const url=require("url");
const { error } = require("console");
const { text } = require("stream/consumers");

const app=http.createServer((req,res)=>{
const newUrl=url.parse(req.url);
console.log(newUrl);
if (newUrl.pathname=="/"){
    fs.readFile("./index.html",(error,data)=>{
        if(error){
            res.writeHead(404,{"Content-Type":"text/html"})
            return res.end("page not found");
        }
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(data);
        res.end();
    })
}else if(newUrl.pathname=="/contact"){
    fs.readFile("./pages/contact.html",(error,data)=>{
        if(error){
            res.writeHead(404,{"Content-type":"text/html"})
            return res.end("page is not found");
        }
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        res.end();
    })
}else{
    fs.readFile("./pages/error",(error,data)=>{
        if(error){
            res.writeHead(404,{"Content-Type":"text/html"});
            res.end("page not found");
        }
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(data);
        res.end();
    })
}

})
app.listen(3002);