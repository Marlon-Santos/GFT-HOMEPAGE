import styled from "styled-components";
import bg from "../../assets/nav-bg.jpg";

export const Li = styled.li`
  color: black;
  padding: 10px;
  font-size: 13px;
  font-weight: bolder;
  :hover {
    background-color: ${props =>
      props.lang === "BRAZIL" ? " #e5f4f7" : "#0e317d"};
    color: ${props => (props.lang === "BRAZIL" ? "#001946" : "white")};
    padding-bottom: 20px;
    transition: 150ms all;
    cursor: default;
  }
  :hover + div {
    visibility: visible;
    opacity: 1;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 50px solid white;
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
  background: ${props => (props.lang === "BRAZIL" ? "#e5f4f7" : `url(${bg})`)};
  background-size: cover;
  left: 0;
  top: 105px;
  :hover {
    visibility: visible;
    opacity: 1;
  }

  h1 {
    border-bottom: 2px solid white;
    padding-bottom: 5px;
    width: fit-content;
    color: white;
    font-weight: normal;
  }
  div {
    width: 100%;
    h1 {
      font-size: 25px;
      margin-bottom: 50px;
      ${props => props.lang === "BRAZIL" && `color:#001946;border:none`};
    }
    span {
      padding: 20px;
      border-top: 0.5px solid #aaa;
      font-size: 13px;
      color: #aaa;
      font-weight: bolder;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 30px;
    list-style: none;
    li {
      :first-child {
        font-size: 16px;
        font-weight: bolder;
        ${props => props.lang === "BRAZIL" && `font-size:13px`};
      }
      border-bottom: 0.5px solid #aaa;
      padding: 20px;
      text-transform: uppercase;
      color: ${props => (props.lang === "BRAZIL" ? "#001946" : "white")};
      font-size: 13px;
      font-weight: bold;
      :last-child {
        margin-bottom: 100px;
      }
    }
  }
`;
