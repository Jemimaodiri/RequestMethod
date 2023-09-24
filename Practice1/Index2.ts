import { read } from "fs";
import fs from "fs";
function readMyFile(){
         const readfile= fs.createReadStream('./streamfile1.txt','utf-8');
         readfile.on('error',function error(){
                  console.log('An error occurred while reading',error)
         })
         readfile.on('data',(buffer)=>{
                  console.log('Reading data from file',buffer)
         })
}
readMyFile();