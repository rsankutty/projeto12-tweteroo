import express from "express";
import cors from 'cors';

const server = express();
server.use(cors());

//definindo porta do servidor e printando msg para o server rodando
server.listen(5000,() => {
    console.log("Servidor Rodando")
});

//definindo rota /
server.get("/", (req, res) => {
    // Manda como resposta o texto 'Hello World'
    res.send('Hello World')
});