import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res){
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros); 
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao listar livros` });
        }
    }

    static async listarLivroId (req, res){
        try {
            const id = req.params.id;
            const _livro = await livro.findById(id);
            res.status(200).json(_livro); 
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", livro: novoLivro });
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` }) //template string
        }
    }

    static async editarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" }); 
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na edição do livro` });
        }
    }

    static async excluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro removido" }); 
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na remoção do livro` });
        }
    }
};

export default LivroController;
