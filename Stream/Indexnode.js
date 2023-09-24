const os = require('os');
// console.log("danny")

// const myOwn=os.cpus()

// const myArch=os.arch()

// const myTotal=os.totalmem()
// console.log(myTotal)

         // console.log(os.homedir())
       const Home=os.networkInterfaces();
       console.log(Home)
       let x=[]
       for (let el in Home) {
          x.push(Home[el])
         
       }
       console.log(x[1][1].address)
//        console.log(result)
         // const myCpus=os.cpus()
         // const result=myCpus[0].model.split(" ")[2].split("-")[0].split("")[1]
         // const myArch=os.arch()
         // console.log(myArch)
         // const myTotal=os.totalmem()
         // const getGb=Math.floor(myTotal/1000000000)
         // console.log(getGb)

         // if (result >= "3" &&  myArch === "x64" && getGb >=4) {
         //          console.log(`You are Welcome To Codelab!`)
         // } else if (result < "3" &&  myArch === "x64" && getGb >=4){
         //          console.log(`Only Model is lower than the required version`)
         // }else if (result >= "3" &&  myArch != "x64" && getGb >=4){
         //          console.log(`Only arch is lower than the required version`)
         // }else if(result >= "3" &&  myArch === "x64" && getGb <4){
         //          console.log(`Only Gb is lower than the required version`)
         // }else{
         //          console.log(`Go get a system`)
         // }



