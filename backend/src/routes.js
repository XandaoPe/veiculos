const express = require("express");
const routes = express.Router();

const VeiculoController = require("./controllers/VeiculoController");
const VeiculoMiddleware = require("./middlewares/VeiculoMiddleware");
const MovtoController = require("./controllers/MovtoController");
const MovtoMiddleware = require("./middlewares/MovtoMiddleware");

routes.get("/veiculos", VeiculoController.index);

routes.post("/veiculos", VeiculoController.store);

routes.put(
  "/veiculos/:id",
  VeiculoMiddleware.getVeiculo,
  VeiculoController.update
);

routes.delete(
  "/veiculos/:id",
  VeiculoMiddleware.getVeiculo,
  VeiculoController.delete
);

routes.patch("/veiculos/:id", VeiculoMiddleware.getVeiculo);

routes.get("/movto", MovtoController.index);

routes.post("/movto", MovtoController.store);

routes.put("/movto/:id", MovtoMiddleware.getMovto, MovtoController.update);

routes.delete("/movto/:id", MovtoMiddleware.getMovto, MovtoController.delete);

routes.patch("/movto/:id", MovtoMiddleware.getMovto);

module.exports = routes;
