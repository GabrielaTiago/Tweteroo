import express, { response }  from "express";


const server = express();
server.use(express.json());

const users = [];

server.post("/sign-up", (require, response) => {
    const user = require.body;
    users.push(user);
    response.send("OK");
});

server.listen(5000);