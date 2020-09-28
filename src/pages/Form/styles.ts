import styled, { keyframes } from "styled-components";

const animationUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;

  .form-wrapper {
    box-shadow: -10px 10px 0px 1px #ec1d25;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 800px;
    animation: ${animationUp} 1s;

    h1 {
      color: #ec1d25;
    }

    form {
      margin-top: 30px;
      width: 80%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      button {
        padding: 9px 50px;
        font-size: 26px;
        color: #fff;
        background-color: #ec1d25;
        transition: transform 1s;
        margin-top: 38px;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
