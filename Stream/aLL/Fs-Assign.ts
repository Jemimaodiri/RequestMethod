import { error } from 'console';
import fs from 'fs';
import path from 'path';


// Folders

fs.mkdir("./MyNodeFolder",(err)=>{
         if (err){
                  console.log("Error creating folder",err)
         }else{
                  console.log("Folder created successfully")
         }
})
fs.mkdir("./MyNodeFolder1",(err)=>{
         if (err){
                  console.log("Error creating folder",err)
         }else{
                  console.log("Folder created successfully")
         }
})
fs.mkdir("./MyNodeFolder2",(err)=>{
         if (err){
                  console.log("Error creating folder",err)
         }else{
                  console.log("Folder created successfully")
         }
})
fs.mkdir("./MyNodeFolder3",(err)=>{
         if (err){
                  console.log("Error creating folder",err)
         }else{
                  console.log("Folder created successfully")
         }
})
fs.mkdir("./MyNodeFolderlast",(err)=>{
         if (err){
                  console.log("Error creating folder",err)
         }else{
                  console.log("Folder created successfully")
         }
})



// Files And Message
const Words1='Let the poor breathe!!';



const Word1b='\n Please oooo'

const Words2='Let the single breathe!!';
const Words2b='\n Abeg !!';




const Words3='Let the fat breathe!!';
const Words3b='\n Abeg!!';



const Words4='Let the dataless breathe!!';
const Words4b='\n Please';



const Words5='Let the confused breathe!!';
const Words5b='\n Please!!';




setInterval(() => {
         fs.writeFile(path.join(__dirname,"MyNodeFolder","1NodeFolder.txt"),Words1,(error)=>{
                  if (error) {
                     console.log("Error Creating And Writing File",error)      
                  }else{
                           console.log("Successful Creating And Writing File")
                  }
         })


         fs.appendFile(path.join(__dirname,"MyNodeFolder","1bNodeFolder.txt"),Word1b,(error)=>{
                  if (error) {
                     console.log("Error Creating And Writing File",error)      
                  }else{
                           console.log("Successful Creating And Writing File")
                  }
         })
},1000);
setInterval(() => {
       
         fs.writeFile(path.join(__dirname,"MyNodeFolder1","2NodeFolder.txt"),Words2,(error)=>{
                  if (error) {
                     console.log("Error Creating And Writing File",error)      
                  }else{
                           console.log("Successful Creating And Writing File")
                  }
         })



fs.appendFile(path.join(__dirname,"MyNodeFolder1","2bNodeFolder.txt"),Words2b,(error)=>{
         if (error) {
            console.log("Error Creating And Writing File",error)      
         }else{
                  console.log("Successful Creating And Writing File")
         }
})
},1000);
setInterval(() => {
         fs.writeFile(path.join(__dirname,"MyNodeFolder2","3bNodeFolder.txt"),Words3,(error)=>{
                  if (error) {
                     console.log("Error Creating And Writing File",error)      
                  }else{
                           console.log("Successful Creating And Writing File")
                  }
         })



         fs.appendFile(path.join(__dirname,"MyNodeFolder3","4bNodeFolder.txt"),Words4b,(error)=>{
                  if (error) {
                     console.log("Error Creating And Writing File",error)      
                  }else{
                           console.log("Successful Creating And Writing File")
                  }
         })
},1000);
setInterval(() => {
         fs.writeFile(path.join(__dirname,"MyNodeFolder3","4NodeFolder.txt"),Words4,(error)=>{
                  if (error) {
                     console.log("Error Creating And Writing File",error)      
                  }else{
                           console.log("Successful Creating And Writing File")
                  }
         })
         



         fs.appendFile(path.join(__dirname,"MyNodeFolderlast","5bNodeFolder.txt"),Words5b,(error)=>{
                  if (error) {
                     console.log("Error Creating And Writing File",error)      
                  }else{
                           console.log("Successful Creating And Writing File")
                  }
         })
},1000);


