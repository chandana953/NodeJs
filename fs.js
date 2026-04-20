const fs = require("fs");

// if(!fs.existsSync("docs")){
//     fs.mkdir("docs",(err)=>{
//         if(err){
//             console.log(err);
//         }        
//         else{
//             console.log("Directory created");
//         }
//     });
// }


//write files
// fs.writeFile("docs/hello.txt","Hello World",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File written");
//     }
// });

//read files
// if(fs.existsSync("./docs/hello.txt")){
// fs.readFile("./docs/hello.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }
// });
// }

// delete files
// if(fs.existsSync("./docs/hello.txt")){
//     fs.unlink("./docs/hello.txt",(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("File deleted");
//         }
//     });
// }

//remove directory
// if(fs.existsSync("docs")){
//     fs.rmdir("docs",(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Directory removed");
//         }
//     });
// }
