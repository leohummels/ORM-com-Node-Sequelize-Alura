
const database = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaPessoa(req, res){
        const {id} = req.params 
        try {
            const pessoa = await database.Pessoas.findOne({where: { id: Number(id) }})
            return res.status(200).json(pessoa)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body
        try {
            const pessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(pessoaCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const novasInfos = req.body
        const { id } = req.params
        try {
            await database.Pessoas.update(novasInfos, {where: { id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({where: { id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res) {
        const {id} = req.params
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `${id} deletado` })
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = PessoaController