import React from "react";
import { Li } from "./style";
import { MdKeyboardArrowRight } from "react-icons/md";

export const FormatList = ({ info = "null", icon }) => {
  return (
    <>
      {typeof info[0] === "string" ? (
        <ul>
          {info.map((item, index) => {
            return <Li key={item + index}>{item}</Li>;
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
              return (
                <Li key={item + index}>
                  {
                    <>
                      {item}{" "}
                      {icon && (
                        <span>
                          <MdKeyboardArrowRight size={30} />
                        </span>
                      )}
                    </>
                  }
                </Li>
              );
            })}
          </ul>
        ))
      )}
    </>
  );
};
