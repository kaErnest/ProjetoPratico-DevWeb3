import kit from "../models/kit.js";
import { item } from "../models/Item.js";

class KitController {

    static async listarKits (req, res) {
        try {
            const listaKits = await kit.find({});
            res.status(200).json(listaKits);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição `});
        }
    };

    static async listarKitPorId (req, res) {
        try {
            const id = req.params.id;
            const kitEncontrado = await kit.findById(id);
            res.status(200).json(kitEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro`});
        }
    };


    static async cadastrarKit (req, res) {
        const novoKit = req.body;
        try {
          const itemtEncontrado = await item.findById(novoKit.item);
          const kitCompleto = { ...novoKit, item: { ...itemtEncontrado._doc }};
          const kitCriado = await kit.create(kitCompleto);
          res.status(201).json({ message: "criado com sucesso", kit: novoKit });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    };

    static async atualizarKit (req, res) {
        try {
            const id = req.params.id;
            await kit.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "kit atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização`});
        }
    };

    static async excluirKit (req, res) {
        try {
            const id = req.params.id;
            await kit.findByIdAndDelete(id);
            res.status(200).json({ message: "kit excluído com sucesso"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão`});
        }
    };

};

export default KitController;