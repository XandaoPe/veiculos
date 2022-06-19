import { createContext, useContext, useState } from "react";
import MovimentationFormModal from "../components/MovimentationFormModal";
import { useAxios } from "../hooks/useAxios";
import api from "../services/api";
import { EditingMovimentationContext } from "./EditingMovimentationContext";

export const MovimentationContext = createContext();

export function MovimentationProvider({ children }) {
  const { data, mutate } = useAxios("veiculos");

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");
  const [date, setDate] = useState(null);
  const [km, setKm] = useState(null);
  const [qtde, setQtde] = useState(null);
  const [valor, setValor] = useState(null);

  const [isFormModalUp, setIsFormModalUp] = useState(false);

  const { editingMovimentation } = useContext(EditingMovimentationContext);

  function handleEditMode(
    veiculoMarca,
    veiculoModelo,
    veiculoPlaca,
    veiculoAno,
    veiculoDate,
    veiculoKm,
    veiculoQtde,
    veiculoValor
  ) {
    setMarca(veiculoMarca);
    setModelo(veiculoModelo);
    setPlaca(veiculoPlaca);
    setAno(veiculoAno);
    setDate(veiculoDate);
    setKm(veiculoKm);
    setQtde(veiculoQtde);
    setValor(veiculoValor);

    openFormModal();
  }

  function submitForm(e) {
    e.preventDefault();

    if (editingMovimentation) {
      api.put(`movto/${editingMovimentation}`, {
        marca,
        modelo,
        placa,
        ano,
        date,
        km,
        qtde,
        valor,
      });

      const updatedVeiculos = {
        veiculos: data.veiculos?.map((veiculo) => {
          if (veiculo._id === editingMovimentation) {
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
        datas: date,
        km,
        qtde,
        valor,
      };
      api.post("movto", veiculo);

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
    <MovimentationContext.Provider
      value={{
        isFormModalUp,
        setIsFormModalUp,
        openFormModal,
        closeFormModal,
        handleMovimentationEditMode: handleEditMode,
        marca,
        setMarca,
        modelo,
        setModelo,
        placa,
        setPlaca,
        ano,
        setAno,
        date,
        setDate,
        km,
        setKm,
        qtde,
        setQtde,
        valor,
        setValor,
        submitForm,
      }}
    >
      {children}
      {isFormModalUp && <MovimentationFormModal />}
    </MovimentationContext.Provider>
  );
}
