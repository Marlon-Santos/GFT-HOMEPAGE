import React from "react";
import { Li, Div } from "./style";
import FormatList from "./formatList/index";
export const List = ({ children }) => {
  const list = React.createRef();
  const divi = React.createRef();

  return (
    <>
      <Li
        ref={list}
        lang={children}
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
      <Div
        lang={children}
        ref={divi}
        onMouseOver={e => {
          children === "BRAZIL"
            ? (list.current.style = `
          background-color: #e5f4f7;
          color: #001946;
          padding-bottom: 20px;`)
            : (list.current.style = `
          background-color: #0e317d;
          color: white;
          padding-bottom: 20px;`);
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
        <div>
          <h1>{children === "BRAZIL" ? "Select your country" : children}</h1>
        </div>
        {children === "SECTORS" && (
          <FormatList
            info={[
              [
                "mercado de capitais",
                "inovação em front office",
                "demandas regulatórias",
                "gestão de risco",
                "eficiência operacional"
              ],
              [
                "banking",
                "exponential banking",
                "pagamentos",
                "core banking",
                "demanda regulatória"
              ],
              [
                "seguros",
                "o cliente no centro de tudo",
                "gestão de sinistros de seguros",
                "canais digitais",
                "eficiência de ti"
              ]
            ]}
          />
        )}
        {/* {children === "CASOS DE SUCESSO" && <FormatList info="" />} */}
        {children === "DISCOVERY" && (
          <FormatList
            info={[
              ["inovação na gft", "nossos laboratórios", "code_n"],
              ["publicações"],
              ["parceiros"]
            ]}
          />
        )}
        {children === "EMPRESA" && (
          <FormatList
            info={[
              [
                "sobre a gft",
                "group executive board",
                "localização",
                "nossa história",
                "regional managing director latam da gft"
              ],
              [
                "newsroom",
                "área de download",
                "serviço de notícias",
                "seu contato de imprensa"
              ],
              [
                "carreiras",
                "ofertas de emprego",
                "estudantes",
                "profissionais",
                "áreas de trabalho da gft",
                "conheça nossa equipe",
                "seu contato de recrutamento e seleção"
              ],
              ["eventos"]
            ]}
          />
        )}
        {children === "BRAZIL" && (
          <FormatList
            info={[
              ["gft worldwide", "canada|en", "france", "mexico", "switzerland"],
              ["belgium", "canada|fr", "germany", "poland", "united kingdom"],
              ["brazil", "costa rica", "italy", "spain", "united states"]
            ]}
            icon="true"
          />
        )}
        <div>
          <span>GFT BRASIL</span>
        </div>
      </Div>
    </>
  );
};
