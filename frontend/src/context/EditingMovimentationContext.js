import { createContext, useState } from "react";

export const EditingMovimentationContext = createContext();

export function EditingMovimentationProvider({ children }) {
  const [editingMovimentation, setEditingMovimentation] = useState(false);

  return (
    <EditingMovimentationContext.Provider
      value={{ editingMovimentation, setEditingMovimentation }}
    >
      {children}
    </EditingMovimentationContext.Provider>
  );
}
