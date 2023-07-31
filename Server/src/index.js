var http = require("http");
const getCharById = require("./controllers/getChartById");


http.createServer((req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req
    const id = url.split('/').at(-1);
   
    if(url.includes("/rickandmorty/character")){
        getCharById(res,id)
    }

}).listen(3001);




// if(url.includes("/rickandmorty/character")){
//     const id = url.split('/').at(-1);

//     const charData = data.find((char) => char.id === Number(id));

//     if(charData){
//       res.writeHead(200 , {"Content-type": "application/json"})
//       res.end(JSON.stringify(charData))  
//     } else{
//         res.writeHead(404 , {"Content-type": "application/json"})
//         res.end(JSON.stringify({error: "Character not found"}))  
//     }
// }