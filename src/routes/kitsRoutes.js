import express from "express";
import KitController from "../controllers/kitController.js";

const routes = express.Router();

routes.get("/kits", KitController.listarKits);
routes.get("/kits/:id", KitController.listarKitPorId);
routes.post("/kits", KitController.cadastrarKit);
routes.put("/kits/:id", KitController.atualizarKit);
routes.delete("/kits/:id", KitController.excluirKit);


export default routes;