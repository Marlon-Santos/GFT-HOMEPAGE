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
  background-color: transparent;
  color: white;
  position: absolute;
  top: 110px;
  left: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  background-clip: padding-box;
  overflow: hidden;
  :last-child {
    color: white;
    padding: 50px 150px;
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-around;
    h1 {
      font-size: 50px;
    }
    button {
      padding: 15px 0;
      width: 125px;
      background-color: transparent;
      border: 1px solid white;
      font-size: 13px;
      font-weight: bolder;
      color: white;
      overflow: hidden;
      :hover {
        background-color: rgba(0, 0, 0, 0.2);
        span {
          animation-duration: 800ms;
          animation-name: slidein;

          @keyframes slidein {
            from {
              /* left: 100px; */
              /* width: 300%; */
              left: 0;
            }
            25% {
              left: 120px;
            }
            26% {
              top: 100px;
            }
            27% {
              left: -120px;
            }

            to {
              left: 0;
            }
          }
        }
      }
      span {
        position: relative;
      }
    }

    h2,
    button {
      text-transform: uppercase;
    }
  }
`;
