const { response } = require("express");
const { v4: uuid } = require("uuid");
const Movto = require("../models/Movto");

module.exports = {
  async index(req, res) {
    try {
      const movto = await Movto.find();
      return res.status(200).json({ movto });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async store(req, res) {
    const { marca, modelo, placa, ano, datas, km, qtde, valor } = req.body;

    if (!km || !qtde || !valor) {
      return res
        .status(400)
        .json({ error: "Obrigatório quantidade, km e valor." });
    }

    const movto = new Movto({
      _id: uuid(),
      marca,
      modelo,
      placa,
      ano,
      datas,
      km: +km,
      qtde: +qtde,
      valor: +valor,
    });

    console.log(movto);

    try {
      await movto.save();

      return res
        .status(201)
        .json({ message: "Movimento inserido com sucesso!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    const { marca, modelo, placa, ano, datas, km, qtde, valor } = req.body;

    if (!km || !qtde || !valor) {
      return res.status(400).json({ error: "Informar quantidade, km e valor" });
    }

    if (marca) res.movto.marca = marca;
    if (modelo) res.movto.modelo = modelo;
    if (placa) res.movto.placa = placa;
    if (ano) res.movto.ano = ano;
    if (datas) res.movto.datas = datas;
    if (km) res.movto.km = km;
    if (qtde) res.movto.qtde = qtde;
    if (valor) res.movto.valor = valor;

    try {
      await res.movto.save();
      return res
        .status(200)
        .json({ message: "Movimento Atualizado com Sucesso!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      await res.movto.remove();
      return res
        .status(200)
        .json({ message: "Movimento removido com Sucesso!" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
