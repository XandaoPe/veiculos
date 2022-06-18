const mongoose = require("mongoose");

const movtoSchema = new mongoose.Schema({
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
  datas: {
    type: String,
    required: true,
  },
  km: {
    type: Number,
    required: true,
  },
  qtde: {
    type: Number,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Movto", movtoSchema);
