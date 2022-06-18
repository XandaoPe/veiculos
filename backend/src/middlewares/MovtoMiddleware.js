const { validate: isUuid } = require("uuid");
const Movto = require("../models/Movto");

module.exports = {
  async getMovto(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    try {
      const movto = await Movto.findById(id);
      res.movto = movto;
      if (!movto) {
        return res.status(404).json({ error: "Movimento não localizado" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }

    next();
  },
};
