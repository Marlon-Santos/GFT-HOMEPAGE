import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  ul {
    display: flex;
    list-style: none;
  }
`;
