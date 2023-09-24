

// fs.mkdir("Practice1",(error)=>{
//          if (error) {
//                 console.log("Error in Creating Dir",error)  
//          }else{
//                   console.log("Successful Creation of dir")
//          }
// })
// const Message="First message: Hi! I am Jemix"

// fs.writeFile(path.join(__dirname,"Practice1","Practice1c.txt"),Message,(error)=>{
//                   if(error){
//                            console.log("Error writing file",error)
//                   }else{
//                            console.log("Success")
//                   }
// })

// const message="\nSecond Message: I am a girl"
// fs.appendFile(path.join(__dirname,"Practice1", "Practice1c.txt"),message,(error)=>{
//          if (error) {
//               console.log("Error in appending")    
//          }else{
//                   console.log("Successful operation") 
//          }
// })
// fs.readFile(path.join(__dirname,"Practice1","Practice1c.txt"),"utf-8",(err,data)=>{
//          if(err){
//                   console.log(err)
//          }else{
//                   console.log(data)
//          }
// })

// fs.rmdir("MyNodeFolderlast",{
//          recursive:true,
// },(error)=>{
//       if (error) {
//          console.log("Error deleting Folder",error)
//       }else{
//          console.log("Successfully deleted")
//       }
// })
// fs.rm(path.join(__dirname, "MyNodeFolder2","3bNodeFolder.txt"),(err)=>{
//          if (err) {
//                   console.log("Error:",err)
//          }else{
//                   console.log("Successfully deleted")
//          }
// })                     

// fs.link("FS.ts","path2.ts",(err)=>{
// if (err) {
//          console.log("Error:",err)
// }else{
//          console.log("Successfully")
// }
// })

// fs.unlink("path2.ts",(err)=>{
//          if (err) {
//                   throw err
//          }else{
//                   console.log("Successfully")
//          }
// })

// let Ex=(fs.existsSync("path.ts"))
// console.log(Ex)




import { error } from "console"
import fs from "fs"
import path from "path"


// const message = "\nwelcome to Codelab, jemix"

// const Welcome=async()=>{
//          // fs.writeFile(path.join(__dirname,"NewFolderOne", "New.txt"),message,(err)=>{
//          //          if (err) {
//          //            console.log("Failed to create",err)
//          //          }else{
//          //            console.log("Created")
//          //          }
//          //   })

//            fs.appendFile(path.join(__dirname, "NewFolderOne", "New.txt"), message, (error): void =>{
//                   if (error) {
//                       console.log("error creating sean", error)
//                   } else {
//                       console.log("Sean appended successfully")
//                   }
//               })
//           }

// Welcome()


// console.log(time);s

setInterval(()=>{
         let date=new Date();
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " Date: " + date.getDate();

    let rand = Math.floor(Math.random() * (2000 + 1000 - 1)) + 1000
    let info = `\nWecome to Codelab, you got in on ${time}, and your registration number is ${rand}`
    fs.appendFile(path.join(__dirname, "NewFolderOne", "New.txt"), info, (error)=>{
        if(error){console.log("Failed", error)}
        else{
            console.log("done",info);
            
        }
        
    })
}, 2000)
