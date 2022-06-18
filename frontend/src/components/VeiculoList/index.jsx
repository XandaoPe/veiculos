import React from "react";
import AddVeiculo from "../AddVeiculo";

import { useAxios } from "../../hooks/useAxios";
import Veiculo from "../Veiculo";

import { Container, VeiculoListWrapper } from "./styles";

export default function VeiculoList() {
  const { data } = useAxios(`veiculos`);

  return (
    <Container>
      <VeiculoListWrapper>
        {data?.veiculos.map((veiculo) => (
          <Veiculo
            key={veiculo._id ? veiculo._id : Math.random()}
            id={veiculo._id}
            marca={veiculo.marca}
            modelo={veiculo.modelo}
            placa={veiculo.placa}
            ano={veiculo.ano}
          />
        ))}
        <AddVeiculo />
      </VeiculoListWrapper>
    </Container>
  );
}
