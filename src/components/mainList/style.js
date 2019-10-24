import styled from "styled-components";

export const Li = styled.li`
  color: black;
  padding: 10px;
  font-size: 13px;
  font-weight: bolder;
  :hover {
    background-color: blue;
    color: white;
    padding-bottom: 20px;
  }

  :hover + div {
    display: block;
  }

  & + div {
    :hover {
      display: block;
    }
    display: none;
    position: absolute;
    width: 100%;
    background-color: blue;
    left: 0;
    top: 105px;
    padding: 50px 100px;
    h1 {
      border-bottom: 2px solid white;
      padding-bottom: 5px;
      width: fit-content;
      color: white;
      font-weight: normal;
    }
  }
`;
