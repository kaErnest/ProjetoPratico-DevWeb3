import { item } from "../models/Item.js";

class ItemController {

    static async listarItens (req, res) {
        try {
            const listaItens = await item.find({});
            res.status(200).json(listaItens);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição `});
        }
    };

    static async listarItemPorId (req, res) {
        try {
            const id = req.params.id;
            const itemEncontrado = await item.findById(id);
            res.status(200).json(itemEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do Item`});
        }
    };


    static async cadastrarItem (req, res) {
        try {
          const novoItem = await item.create(req.body);
          res.status(201).json({ message: "criado com sucesso", item: novoItem });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar Item` });
        }
    };

    static async atualizarItem (req, res) {
        try {
            const id = req.params.id;
            await item.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Item atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização`});
        }
    };

    static async excluirItem (req, res) {
        try {
            const id = req.params.id;
            await item.findByIdAndDelete(id);
            res.status(200).json({ message: "Item excluído com sucesso"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão`});
        }
    };

    static async listarItemPorNome (req, res) {
        const nome = req.query.nome;
        try {
          const ItemPorNome = await item.find({ nome: nome });
          res.status(200).json(ItemPorNome);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
    };
};

export default ItemController;