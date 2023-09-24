 import http, { IncomingMessage, ServerResponse } from 'http';
 const Port:number=3200;
interface iData{
         id:number
         name:string
         phone:number
         stack:string
}

interface iMassage{
         message:string
         success:boolean
         data:null | {}| {}[]

}
 const Set08:iData[]=[
         {
           id:1,
           name:'Jemix',
           phone:7036921433,
           stack:"Full Stack"
         },
         {
           id:2,
           name:'Jennie',
           phone:2999567367,
           stack:"Half Stack"
         },
         {
           id:3,
           name:'Jesine',
           phone:89035268253,
           stack:"Quarte Stack"
         },
 ]
 const Server=http.createServer((req:IncomingMessage,res:ServerResponse<IncomingMessage>)=>{
         res.setHeader('Content-Type', 'application/json')
         const{method, url}=req
         let Status:number=404;

         let Response:iMassage={
                  message:'Failed',
                  success:false,
                  data:null
         };


         const container:any=[];
         req.on('data',(chunk:any)=>{
          container.push(chunk);
         }).on('end',()=>{


// Get Methods
if (url==='/' && method==='GET') {
  Status=200;
  Response.message='Success Getting Set08 data'
  Response.success=true;
  Response.data=Set08;
  res.write(JSON.stringify({Response,Status}))
  res.end()
  
}

if (url==='/' && method==='POST') {
  Status=200;
  const body=JSON.parse(container);
  Set08.push(body);
  Response.message='Updated successfully'
  Response.success=true;
  Response.data=Set08
  res.write(JSON.stringify({Status,Response}))
  res.end()
}
         })

 })
 Server.listen(Port,()=>{
         console.log('Server is up and listening on port',Port)
 })