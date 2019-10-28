import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @keyframes test {
    from {
      left: 0;
    }
    50% {
      left: 30px;
      visibility: hidden;
    }
    51% {
      left: -30px;
    }
    to {
      visibility: visible;
      left: 0;
    }
  }
  span {
    flex-basis: 30px;
    overflow: hidden;
  }
  :hover {
    svg {
      position: relative;
      animation-duration: 700ms;
      animation-name: test;
    }
  }
`;
