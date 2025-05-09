import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexão com banco feita com sucesso")
})

const app = express();
app.use(express.json()); 

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js"); // envio da resposta é uma string
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros); // envio da resposta em json
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros); // facilitando pra ver como esta tudo
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("O livro foi excluído");
})

export default app;

