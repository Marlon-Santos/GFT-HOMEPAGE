import React from "react";
// import { Li } from "./style";

export const FormatList = ({ info = "null" }) => {
  return (
    <>
      {typeof info[0] === "string" ? (
        <ul>
          {info.map((item, index) => {
            return <li key={item + index}>{item}</li>;
          })}
        </ul>
      ) : (
        info.map(item => (
          <ul
            key={
              Math.ceil(Math.random() * 1000) +
              Math.ceil(Math.random() * 1000) / Math.ceil(Math.random() * 1000)
            }
          >
            {item.map((item, index) => {
              return <li key={item + index}>{item}</li>;
            })}
          </ul>
        ))
      )}
    </>
  );
};
