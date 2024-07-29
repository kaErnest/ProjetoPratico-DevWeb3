import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

const app = express();
routes(app);

app.delete('/kits/:id', (req, res) => {
    const index = buscaKit(req.params.id);
    kits.splice(index, 1);
    res.status(200).send('Kit removido com sucesso.');
});
  
export default app;

