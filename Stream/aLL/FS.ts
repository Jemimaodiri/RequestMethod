import { error, time } from "console"
import fs, { existsSync } from "fs"
import path from "path"

// // fs.mkdir("./NewClass", (err,):void=>{
// //          if (err) {
// //               console.log("Error creating Folder", err)    
// //          }else{
// //                   console.log("Folder created successfully")
// //          }
// // })
// const Message=" Help"
// fs.writeFile(path.join (__dirname,"NewClass", "NewClassfile.txt"),Message,(error)=>{
//          if (error) {
//               console.log("Error writing a file", error)    
//          }else{
//                   console.log("New file written")
//          }
// })

// const Message2="\n SEND ME MONEY!"

// fs.appendFile(path.join(__dirname,"NewClass", "OldClassfile.txt"),Message2,(error):void=>{
//          if (error) {
//                  console.log("Error In Appending Files",error) 
//          }else{
//                   console.log("Appending Files Successfully")
//          }
// })

// const Message3="\n Asap!"
// fs.appendFile(path.join(__dirname,"NewClass", "OldClassfile.txt"),Message3,(error):void=>{
//          if (error) {
//                  console.log("Error In Appending Files",error) 
//          }else{
//                   console.log("Appending Files Successfully")
//          }
// })
// const Message4="\n I am Jemima!";
       

// // fs.writeFile(path.join(__dirname,"NewClass", "Jemima.txt"),Message4,(error):void=>{
// //          if (error) {
// //                  console.log("Error In Appending Files",error) 
// //          }else{
// //                   console.log("Appending Files Successfully")
// //          }
// // })

// // setInterval(()=>{
// //          fs.appendFile(path.join(__dirname,__dirname,"NewClass", "Jemima.txt"),Message4,(error):void=>{
// //                   if (error) {
// //                          console.log("Error in Appending",error)  
// //                   }else{
// //                            console.log("Append successful")
// //                   }
// //          })
      
// // },5000)



// // FELLOW esther's code

// // fs.mkdir("./Newclass" , (error):void =>{
// //     if(error){
// //         console.log("an error in creating folder" , error)
// //     }else{
// //         console.log("Folder created successfully")
// //     }
// // })

// const newMsg = "Help me Buy Food";
// // fs.writeFile(path.join(__dirname , "Newclass" ,"OldFile.txt"),newMsg, (error):void=>{
// //     if(error){
// //         console.log("Error writing a file", error);
// //     }else{
// //         console.log("New File Added")
// //     }

// //     const newMsg2 = "\nBuy snacks for joan"

// //     fs.appendFile(path.join(__dirname , "Newclass", "OldFile.txt") , newMsg2 , (error):void=>{
// //         if(error){
// //             console.log("AN error in appending file", error)
// //         }else{
// //             console.log("New File Appended")
// //         }
// //     })
// // })

// const newMsg2 = "\nBuy snacks for joan";

// setInterval(() => {
//   fs.appendFile(
//     path.join(__dirname, "Newclass", "OldFile.txt"),
//     newMsg2,
//     (error) => {
//       if (error) {
//         console.log("AN error in appending file", error);
//       } else {
//         console.log("New File Appended");
//       }
//     }
//   );
// }, 3000);


// fs.readFile(path.join(__dirname, "NewClass", "OldClassfile.txt"),"utf-8",(err, data) => {
//          if(err){
//                   console.log(err)
//          }else{
//                   console.log(data)
//          }
// })


// console.log(Event)



// const message = "welcome to Codelab"
// const message2 = "\nwelcome again"

// const welcomeEvent = async () => {
//     fs.mkdir("ClassFolder", (error): void => {
//         if (error) {
//         console.log("error creating folder", error)
//         } else {
//             console.log("folder created successfully")
//     }
// })

// fs.writeFile(path.join(__dirname, "ClassFolder", "Newclasses.txt"),message,(error)=>{
//          if(error){
//                   console.log("Error creating file and writing file", error)
//          }else{
//                   console.log("Success in writing file")
//          }
// })



// fs.appendFile(path.join(__dirname, "ClassFolder", "Newclasses.txt"), message2, (error): void =>{
//          if (error) {
//              console.log("error creating sean", error)
//          } else {
//              console.log("Sean appended successfully")
//          }
//      })
//  }
 
  

// // console.log(welcomeEvent())

// export default welcomeEvent;


// const CodeLab=async()=>{
//          fs.mkdir(path.join("OneFolder"),(error)=>{
//                   if (error){console.log("Error creating ",error)

//                   }else{
//                            console.log("Success in creating")
//                   }
//          })
// }






fs.rm("./MyNodeFolder1//2NodeFolder.txt",(error)=>{
         if (error) {
                  console.log("Error in deleting files",error)
         }else{
                  console.log("Success")
         }
})

fs.rmdir("MyNodeFolder",{
         recursive:true,
},(error)=>{
         if (error) {
                  console.log("Wrong",error)
         }else{
                  console.log("Directory deleted")
         }
})

fs.link("FS.ts","NewNodeFolder.txt",(error)=>{
         if (error) {
                  console.log("link failed",error)
         }else{
                  console.log("successfully linked")
         }
})

fs.unlink("index.ts",(err)=>{
         if (err) {
            console.log("unlink failed",err)      
         }else{
                  console.log("successfully unlinked")
         }
})
let Exist=fs.existsSync("Jemix.txt")
console.log(Exist)