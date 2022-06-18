const { response } = require("express");
const { v4: uuid } = require("uuid");
const Veiculo = require("../models/Veiculo");

module.exports = {

  async index(req, res) {
    try {
      const veiculos = await Veiculo.find();
      return res.status(200).json({ veiculos });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async store(req, res) {
    const { marca, modelo, placa, ano } = req.body;

    if (!modelo || !placa) {
      return res.status(400).json({ error: "Obrigatório modelo ou placa." });
    }

    const veiculo = new Veiculo({
      _id: uuid(),
      marca,
      modelo,
      placa,
      ano
    });

    try {
      await veiculo.save();

      return res.status(201).json({ message: "Veículo inserido com sucesso!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    const { marca, modelo, placa, ano } = req.body;

    if (!modelo && !placa) {
      return res
        .status(400)
        .json({ error: "Informar modelo e placa" });
    }

    if (marca) res.veiculo.marca = marca;
    if (modelo) res.veiculo.modelo = modelo;
    if (placa) res.veiculo.placa = placa;
    if (ano) res.veiculo.ano = ano;

    try {
      await res.veiculo.save()
      return res.status(200).json({ message: "Veículo Atualizado com Sucesso!" });
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },

  async delete(req, res) {
    try {
      await res.veiculo.remove();
      return res.status(200).json({ message: "Veículo removido com Sucesso!" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

};
