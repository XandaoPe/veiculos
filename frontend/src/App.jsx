import React from "react";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import { FormModalProvider } from "./context/FormModalContext";
import { MovimentationProvider } from "./context/MovimentationContext";
import { EditingVeiculoProvider } from "./context/EditingVeiculoContext";
import { EditingMovimentationProvider } from "./context/EditingMovimentationContext";

export default function App() {
  return (
    <>
      <EditingVeiculoProvider>
        <EditingMovimentationProvider>
          <FormModalProvider>
            <MovimentationProvider>
              <Layout />
            </MovimentationProvider>
          </FormModalProvider>
        </EditingMovimentationProvider>
      </EditingVeiculoProvider>
      <GlobalStyles />
    </>
  );
}
