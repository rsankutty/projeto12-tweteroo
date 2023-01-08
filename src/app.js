import express from "express";
import cors from 'cors';

//porta da aplicação
const PORT = 5000;

//inicializando servidor
const server = express();
server.use(cors());
server.use(express.json());
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});


const usuarios = [];
const tweets = [];

//definindo rota post de sign-up
server.post('/sign-up', (req, res) => {
    const usuario = req.body;
    console.log(usuario);
    usuarios.push(usuario);
    res.send("OK");
});

//definindo rota post de tweets
server.post('/tweets', (req, res) => {
    const tweet = req.body;
    console.log(tweet);

    const username = tweet.username;

    const usuarioCadastrado = usuarios.find(item => item.username === username)
    if (!usuarioCadastrado) {
        res.send("UNAUTHORIZED");
    } else {
        tweets.push({ ...tweet, avatar: usuarioCadastrado.avatar });
        res.send("OK");
    }
});


//definindo rota get de tweets
server.get("/tweets", (req, res) => {
    let latestTweets = [...tweets].reverse()
    res.send(latestTweets.splice(0,10));
})

