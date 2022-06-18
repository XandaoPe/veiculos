import React, { useContext } from "react";
import { FormModalContext } from "../../context/FormModalContext";
import { EditingVeiculoContext } from "../../context/EditingVeiculoContext";

import { AddVeiculoButton, AddIcon } from "./styles";

export default function AddVeiculo() {
  const { openFormModal, setMarca, setModelo, setPlaca, setAno } = useContext(FormModalContext);
  const { setEditingVeiculo } = useContext(EditingVeiculoContext);

  function handleAdd() {
    setMarca("");
    setModelo("");
    setPlaca("");
    setAno("");
    setEditingVeiculo(false);
    openFormModal();
  }

  return (
    <li>
      <AddVeiculoButton onClick={handleAdd}>
        <AddIcon />
      </AddVeiculoButton>
    </li>
  );
}
