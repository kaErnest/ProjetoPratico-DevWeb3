import express from "express";
import ItemController from "../controllers/itemController.js";

const routes = express.Router();

routes.get("/itens", ItemController.listarItens);
routes.get("/itens/busca", ItemController.listarItemPorNome);
routes.get("/itens/:id", ItemController.listarItemPorId);
routes.post("/itens", ItemController.cadastrarItem);
routes.put("/itens/:id", ItemController.atualizarItem);
routes.delete("/itens/:id", ItemController.excluirItem);


export default routes;