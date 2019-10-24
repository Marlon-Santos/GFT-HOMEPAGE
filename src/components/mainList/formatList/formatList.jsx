import React from "react";
import { Li } from "./style";

export const FormatList = ({ info, title }) => {
  console.log(info);
  return (
    <>
      {info.map((item, index) => (
        <li key={item + index}>{item}</li>
      ))}
    </>
  );
};
