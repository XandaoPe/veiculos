import { createContext, useState } from "react";

export const EditingVeiculoContext = createContext();

export function EditingVeiculoProvider({ children }) {
  const [editingVeiculo, setEditingVeiculo] = useState(false);

  return (
    <EditingVeiculoContext.Provider value={{ editingVeiculo, setEditingVeiculo }}>
      {children}
    </EditingVeiculoContext.Provider>
  );
}
