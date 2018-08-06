import express from 'express'

const server = express()

server.get("/", (req, res) => res.send("Hello world, I am Calculator service"));
server.get("/add", handleRequest);
server.get("/subtract", handleRequest);
server.get("/multiply", handleRequest);
server.get("/divide", handleRequest);

server.listen(3000, () =>  console.log("Service has started listening on port 3000 !!!"));

function handleRequest(req, res) {
    const op1 = parseFloat(req.query.op1);
    const op2 = parseFloat(req.query.op2);
    switch(req._parsedUrl.pathname) {
        case "/add": return res.send(new Result(add(op1, op2)));
        case "/subtract": return res.send(new Result(subtract(op1, op2)));
        case "/multiply": return res.send(new Result(multiply(op1, op2)));
        case "/divide": return res.send(new Result(divide(op1, op2)));
        default: break;
    }
    return res.send(result);
}

const add = (op1, op2) => op1 + op2;
const subtract = (op1, op2) => op1 - op2;
const multiply = (op1, op2) => op1 * op2;
const divide = (op1, op2) => op1 / op2;

class Result {
    constructor(result) {
        this.result = result;
    }
}