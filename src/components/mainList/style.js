import styled from "styled-components";

export const Li = styled.li`
  color: blue;
  background-color: #ddd;
  padding: 10px;
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
    top: 50px;
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
