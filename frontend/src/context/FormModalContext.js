import { createContext, useContext, useState } from "react";
import FormModal from "../components/FormModal";
import { useAxios } from "../hooks/useAxios";
import api from "../services/api";
import { EditingVeiculoContext } from "./EditingVeiculoContext";

export const FormModalContext = createContext();

export function FormModalProvider({ children }) {
  const { data, mutate } = useAxios("veiculos");

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");
  const [isFormModalUp, setIsFormModalUp] = useState(false);

  const { editingVeiculo } = useContext(EditingVeiculoContext);

  function handleEditMode(veiculoMarca, veiculoModelo, veiculoPlaca, veiculoAno) {
    setMarca(veiculoMarca);
    setModelo(veiculoModelo);
    setPlaca(veiculoPlaca);
    setAno(veiculoAno);
    openFormModal();
  }

  function submitForm(e) {
    e.preventDefault();

    if (editingVeiculo) {
      api.put(`veiculos/${editingVeiculo}`, {
        marca,
        modelo,
        placa,
        ano,
      });

      const updatedVeiculos = {
        veiculos: data.veiculos?.map((veiculo) => {
          if (veiculo._id === editingVeiculo) {
            return { ...veiculo, marca, modelo, placa, ano };
          }
          return veiculo;
        }),
      };

      mutate(updatedVeiculos, false);
    } else {
      const veiculo = {
        marca,
        modelo,
        placa,
        ano,
      };
      api.post("veiculos", veiculo);

      const updatedVeiculos = {
        veiculos: [...data.veiculos, veiculo],
      };

      mutate(updatedVeiculos, false);
    }

    closeFormModal();
  }

  function openFormModal() {
    setIsFormModalUp(true);
  }

  function closeFormModal() {
    setIsFormModalUp(false);
  }

  return (
    <FormModalContext.Provider
      value={{
        isFormModalUp,
        setIsFormModalUp,
        openFormModal,
        closeFormModal,
        handleEditMode,
        marca,
        setMarca,
        modelo,
        setModelo,
        placa,
        setPlaca,
        ano,
        setAno,
        submitForm,
      }}
    >
      {children}
      {isFormModalUp && <FormModal />}
    </FormModalContext.Provider>
  );
}
