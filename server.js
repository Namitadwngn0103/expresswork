const express = require ('express');
//var server=http.createServer(function(req,resp){
const app = express();
app.get("/",function(req,res){
    res.send("welcome");
});
app.get("/about",function(req,res)
{
    res.sendfile(__dirname+"/index.html");
});

app.listen(5000,function(req,res)
{
    console.log("hiii")
});
