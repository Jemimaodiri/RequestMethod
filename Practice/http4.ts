// import http, { IncomingMessage, ServerResponse } from "http"

// const port:number=3600;

// const StudentPortal=[
//          {
//                   "name":"Daniel",
//                  " lastName":"Peters",
//                  " age":"20",

//          },
//          {
//                   "name":"Daniel1",
//                  " lastName":"Peters2",
//                   "age":"21"

//          },
//          {
//                   "name":"Daniel3",
//                  " lastName":"Peters3",
//                   "age":"22",

//          },
// ]
// const StudentPortal2=[
//          {
//                   name:"Demziee",
//                   lastName:"Chadlyn",
//                   age:"20",

//          },
//          {
//                   name:"Demziee",
//                   lastName:"Chadlyn2",
//                  age:"21",

//          },
//          {
//                   name:"Demziee",
//                   lastName:"Chadlyn3",
//                   age:"23",

//          },
// ]
// const CreatingServer=http.createServer((req:IncomingMessage,res:ServerResponse<IncomingMessage>)=>{

//          if (req.url==='/' && req.method === 'GET' && res.statusCode===200){
//                   // res.setHeader('content-Type','application/json');
//                   res.setHeader('content-Type','application/text');
//                   // res.write(JSON.stringify(StudentPortal2))
//                   res.write(JSON.parse(StudentPortal))
//                   res.end()
//          }
//          res.end()
// })
// CreatingServer.listen(port,()=>{
//          console.log("Server listening on port:",port)
// })