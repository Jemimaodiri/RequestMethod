
import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";
const port:number=7500;
const Server=http.createServer((req:IncomingMessage,res:ServerResponse<IncomingMessage>)=>{
         res.writeHead(200)
         // res.write("server is up and running")
         // res.end()
                  let Links:string='site2/'
         switch (req.url) {
                 
                  case '/':
                  Links += 'Home.html'
                  res.statusCode=200   
                 break;

                 case '/about':
                  Links += 'About.html'
                  res.statusCode=200
                  break;

                  case '/contact':
                  Links += 'Contact.html'
                  res.statusCode=200;
                  break;

                  case'/features':
                  Links += 'Features.html'
                  res.statusCode=200;
                  break;

                  default:
                           Links += '404.html'
                           res.statusCode=404;
                    break;
         }
         // res.end()

         fs.readFile(path.join(__dirname,Links),(err,data)=>{
         if (err) {
                 console.log('Error reading data',err) 
         }else{
                  res.write(data)
                  res.end()
         }
         })
}


)
Server.listen(port,()=>{
         console.log("Server listening on port",port)
})