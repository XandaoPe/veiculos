const mongoose = require("mongoose");

const veiculoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: false,
  },
  modelo: {
    type: String,
    required: true,
  },
  placa: {
    type: String,
    required: true,
  },
  ano: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Veiculo", veiculoSchema);
