import React, { useContext } from "react";
import { EditingVeiculoContext } from "../../context/EditingVeiculoContext";
import { FormModalContext } from "../../context/FormModalContext";

import {
  Overlay,
  Container,
  Header,
  CloseIcon,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CheckIcon,
} from "./styles";

export default function FormModal() {
  const {
    closeFormModal,
    submitForm,
    marca,
    modelo,
    placa,
    ano,
    setMarca,
    setModelo,
    setPlaca,
    setAno,
  } = useContext(FormModalContext);

  const { editingVeiculo } = useContext(EditingVeiculoContext);

  function marcaHandler(e) {
    setMarca(e.target.value);
  }

  function modeloHandler(e) {
    setModelo(e.target.value);
  }

  function placaHandler(e) {
    setPlaca(e.target.value);
  }

  function anoHandler(e) {
    setAno(e.target.value);
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>{editingVeiculo ? "Editar Veiculo" : "Addicionar Veiculo"}</strong>
          <button onClick={closeFormModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer>
          <FormMain>
            <InputGroup>
              <label htmlFor="marca">Marca</label>
              <input
                id="marca"
                type="text"
                value={marca}
                placeholder="Inserir Fabricante do Veículo"
                onChange={marcaHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="marca">Modelo</label>
              <input
                id="modelo"
                type="text"
                value={modelo}
                placeholder="Inserir Modelo do Veículo"
                onChange={modeloHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="marca">Placa</label>
              <input
                id="placa"
                type="text"
                value={placa}
                placeholder="Inserir a Placa do Veículo"
                onChange={placaHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="marca">Ano</label>
              <input
                id="ano"
                type="text"
                value={ano}
                placeholder="Inserir o Ano do Veículo"
                onChange={anoHandler}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button onClick={submitForm}>
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
