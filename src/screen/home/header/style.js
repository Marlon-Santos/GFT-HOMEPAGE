import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  ul {
    display: flex;
    list-style: none;
  }
`;

export const Div = styled.div`
  height: 400px;
  width: 100%;
  background-color: burlywood;
  color: white;
  position: absolute;
  top: 110px;
  left: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  background-clip: padding-box;
  overflow: hidden;
`;
