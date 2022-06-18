import React from "react";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import { FormModalProvider } from "./context/FormModalContext";
import { EditingVeiculoProvider } from "./context/EditingVeiculoContext";

export default function App() {
  return (
    <>
      <EditingVeiculoProvider>
        <FormModalProvider>
          <Layout />
        </FormModalProvider>
      </EditingVeiculoProvider>
      <GlobalStyles />
    </>
  );
}
