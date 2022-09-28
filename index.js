const http=require('http');
const port=8000;
const fs=require('fs');

function requestHandler(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            return res.end("<h1>Error!</h1>")
        }
        console.log(data);
        res.end(data);
    })
}

const server=http.createServer(requestHandler);

server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running ");
})