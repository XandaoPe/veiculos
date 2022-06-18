import React from "react";

import Header from "../Header";
import VeiculoList from "../VeiculoList";
import Footer from "../Footer";

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <VeiculoList />
      <Footer />
    </Container>
  );
}
