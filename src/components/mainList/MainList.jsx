import React from "react";
import { Li } from "./style";
import FormatList from "./formatList/index";
export const List = ({ children }) => {
  return (
    <>
      <Li>{children}</Li>
      <div>
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
          <FormatList title="testando" info={["emrssdgyegdejh", "test1"]} />
        )}
      </div>
    </>
  );
};
