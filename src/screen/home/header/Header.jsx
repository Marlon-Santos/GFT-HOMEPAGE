import React from "react";
import List from "../../../components/list/index";
import MainList from "../../../components/mainList/index";
import { Container } from "./style";
import logo from "../../../assets/logo.svg";

export default function home() {
  return (
    <>
      <Container justify="flex-end">
        <ul>
          <List>CARREIRAS</List>
          <List>PRESS</List>
          <List>INVESTORS</List>
          <List>BLOG</List>
        </ul>
      </Container>
      <Container justify="space-between">
        <div>
          <img src={logo} alt="gft logo" width="130" />
        </div>
        <div>
          <ul>
            <MainList>SECTORS</MainList>
            <MainList>CASOS DE SUCESSO</MainList>
            <MainList>DISCOVERY</MainList>
            <MainList>EMPRESA</MainList>
          </ul>
        </div>
        <div>
          <ul>
            <MainList>BRAZIL</MainList>
            <MainList>PESQUISAR</MainList>
          </ul>
        </div>
      </Container>
    </>
  );
}
