import React from "react";
import { Li } from "./style";
import FormatList from "./formatList/index";
export const List = ({ children }) => {
  const list = React.createRef();
  const divi = React.createRef();

  return (
    <>
      <Li
        ref={list}
        onMouseOver={e => {
          e.currentTarget.style = "";
          divi.current.style = `transition:none`;
        }}
        onMouseOut={e => {
          e.currentTarget.style = "";
          divi.current.style = `transition:200ms all`;
        }}
      >
        {children}
      </Li>
      <div
        ref={divi}
        onMouseOver={e => {
          list.current.style = ` background-color: #0e317d;
          color: white;
          padding-bottom: 20px;`;
        }}
        onMouseOut={e => {
          list.current.style = `
          color: black;
          padding: 10px;
          backgound-color: white;`;
          e.currentTarget.style = `transition: 200ms all`;
        }}
        onLoad={() => {
          console.log("ok");
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
