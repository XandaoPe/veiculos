import React, { useContext } from "react";

import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5";
import { EditingVeiculoContext } from "../../context/EditingVeiculoContext";
import { FormModalContext } from "../../context/FormModalContext";
import { useAxios } from "../../hooks/useAxios";

import api from "../../services/api";

import { Container, ButtonArea, Button } from "./styles";

export default function Veiculo({ id, marca, modelo, placa, ano }) {
  const { handleEditMode } = useContext(FormModalContext);
  const { setEditingVeiculo } = useContext(EditingVeiculoContext);

  const { data, mutate } = useAxios("veiculos");


  // function handleMovimento() {
  //   api.patch(`/veiculos/${id}`);

  //   const updatedVeiculos = {
  //     veiculos: data.veiculos?.map((veiculo) => {
  //       if (veiculo._id === id) {
  //         return { ...veiculo, marca, modelo, placa, ano };
  //       }
  //       return veiculo;
  //     }),
  //   };

  //   mutate(updatedVeiculos, false);
  // }

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
          <Button onClick={""}>
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
