import styled from "styled-components";
import bg from "../../assets/nav-bg.jpg";

export const Li = styled.li`
  color: black;
  padding: 10px;
  font-size: 13px;
  font-weight: bolder;
  :hover {
    background-color: #0e317d;
    color: white;
    padding-bottom: 20px;
    transition: 150ms all;
  }

  :hover + div {
    visibility: visible;
    opacity: 1;
    height: auto;
  }

  & + div {
    :hover {
      visibility: visible;
      opacity: 1;
      height: auto;
    }
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    border-left: 50px solid white;
    border-right: 50px solid white;
    background-clip: content-box;
    padding: 50px 150px;
    overflow: hidden;
    position: absolute;
    background: url(${bg});
    background-size: cover;
    left: 0;
    top: 105px;
    h1 {
      border-bottom: 2px solid white;
      padding-bottom: 5px;
      width: fit-content;
      color: white;
      font-weight: normal;
    }
  }
`;
