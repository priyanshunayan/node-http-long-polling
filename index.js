const express = require('express');
const app = express();
const LIMIT = 20;
const PORT = 3000;
const DELAY = 1000;
const connections = [];

app.get('/date', (req, res, next) => {
    res.setHeader('Content-Type', "text/html; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");

    connections.push(res);
})

let tick = 0;

setTimeout(function run() {
    console.log(tick);
    if(++tick > LIMIT){
        connections.map(res => {
            res.write("END\n");
            res.end();
        })
        connections = [];
        tick = 0;
    }
    connections.map((res, index) => {
        res.write(`Hello ${index}! Tick : ${tick}\n`)
    })
    setTimeout(run , DELAY)
}, DELAY);


app.listen(PORT || 3000, ()=> {
    console.log(`The server is running on port ${PORT}`);
})