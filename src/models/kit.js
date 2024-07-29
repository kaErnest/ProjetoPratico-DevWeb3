import mongoose from "mongoose";
import { itemSchema } from "./Item.js";

const kitSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    item: itemSchema,
    preco: { type: Number },
}, { versionKey: false });

const kit = mongoose.model("kits", kitSchema);

export default kit;