const fs = require('fs');

const data =fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
const Dataobj= JSON.parse(data);
    

// //Reading Synchronous way
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn)

// //Writing 
// const textOut = `This is what we know about the avocado ${textIn}.\n Created on ${Date.now()} `;
// fs.writeFileSync('./txt/output.txt',textOut)
// console.log("File has been return");

//Non-blocking ,asynchronous way
// fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
//             console.log(data3)
//             fs.writeFile('./txt/final.txt',`${data2}\n ${data3}`,'utf-8',err =>{
//                 console.log("File has been return")
//             })
//         })
//     });
// });


const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName ==='/' ||pathName==='/overview'){
        res.end('These is a overview page')
    }else if (pathName==='/product'){
        res.end("These is a product page")
    }else if (pathName==='/api'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data);
    }
    
    else {
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        });

        res.end("<h1>Page not found!<h1>")
    }
})

const PORT = 8000;
server.listen(PORT,'127.0.0.1',()=>{
    console.log(`App listening on ${PORT}`)
})



