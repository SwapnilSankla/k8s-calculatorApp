import express from 'express';
import requestPromise from 'request-promise';

const server = express();

server.get("/",(req, res) => res.send("Hello world, I am Calculator client"));
server.get("/exec", (req, res) => {
    requestPromise
    .get(`http://calculator-api-service:80/${req.query.operation}?op1=${req.query.op1}&op2=${req.query.op2}`)
    .then((response) => res.send(response));
});
server.listen(5000, () => console.log("Calculator client is started at port 5000"));