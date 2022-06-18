const { validate: isUuid } = require("uuid");
const Veiculo = require("../models/Veiculo");

module.exports = {
  async getVeiculo(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    try {
      const veiculo = await Veiculo.findById(id);
      res.veiculo = veiculo;
      if (!veiculo) {
        return res.status(404).json({ error: "Veículo não localizado" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }

    next();
  },
};
