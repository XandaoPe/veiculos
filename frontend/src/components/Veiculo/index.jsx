import React, { useContext } from "react";

import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5";
import { EditingVeiculoContext } from "../../context/EditingVeiculoContext";

import { FormModalContext } from "../../context/FormModalContext";
import { MovimentationContext } from "../../context/MovimentationContext";

import { useAxios } from "../../hooks/useAxios";

import api from "../../services/api";

import { Container, ButtonArea, Button } from "./styles";

export default function Veiculo({ id, marca, modelo, placa, ano }) {
  const { handleEditMode } = useContext(FormModalContext);
  const { handleMovimentationEditMode } = useContext(MovimentationContext);
  const { setEditingVeiculo } = useContext(EditingVeiculoContext);

  const { data, mutate } = useAxios("veiculos");

  function handleMovimento() {
    handleMovimentationEditMode(marca, modelo, placa, ano);
  }

  function handleDelete() {
    api.delete(`/veiculos/${id}`);

    const updatedVeiculos = {
      veiculos: data.veiculos?.filter((veiculo) => veiculo._id !== id),
    };

    mutate(updatedVeiculos, false);
  }

  function handleEdit() {
    handleEditMode(marca, modelo, placa, ano);
    setEditingVeiculo(id);
  }

  return (
    <li key={id}>
      <Container>
        <h2>{placa}</h2>
        <p>{marca}</p>
        <p>{modelo}</p>
        <p>{ano}</p>
        <ButtonArea>
          <Button onClick={handleMovimento}>
            <IoThumbsUp />
          </Button>
          <Button onClick={handleEdit}>
            <IoPencil />
          </Button>
          <Button onClick={handleDelete}>
            <IoTrashBin />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
