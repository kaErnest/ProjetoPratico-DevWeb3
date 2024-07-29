import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    descricao: { type: String },
    preco: { type: Number },
}, { versionKey: false });

const item = mongoose.model("itens", itemSchema);

export { item, itemSchema };