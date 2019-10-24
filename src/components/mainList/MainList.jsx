import React from "react";
import { Li } from "./style";
import FormatList from "./formatList/index";
export const List = ({ children }) => {
  const ref = React.createRef();
  return (
    <>
      <Li
        ref={ref}
        onMouseOver={e => {
          e.currentTarget.style = "";
        }}
        onMouseOut={e => {
          e.currentTarget.style = "";
        }}
      >
        {children}
      </Li>
      <div
        onMouseOver={e => {
          ref.current.style = ` background-color: blue;
          color: white;
          padding-bottom: 20px;`;
        }}
        onMouseOut={e => {
          ref.current.style = `
           color: black;
          padding: 10px;
          backgound-color: white`;
        }}
      >
        <h1>{children}</h1>
        {children === "SECTORS" && (
          <FormatList info={["sctores1", "sectores2", "sectores3"]} />
        )}
        {children === "CASOS DE SUCESSO" && (
          <FormatList info={["casesucess", "test1"]} />
        )}
        {children === "DISCOVERY" && (
          <FormatList
            info={[
              "discovery",
              "disceheovery",
              "discoverydhde",
              "discovery",
              "test1"
            ]}
          />
        )}
        {children === "EMPRESA" && (
          <FormatList info={["emrssdgyegdejh", "test1"]} />
        )}
      </div>
    </>
  );
};
