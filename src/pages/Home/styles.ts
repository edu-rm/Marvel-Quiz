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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    animation: ${animationUp} 1s;
  }

  img {
    width: 50%;
    width: 600px;
  }

  .card {
    top: 200px;
    transform: rotate(-5deg);
    width: 350px;
    height: 200px;
    background: white;
    box-shadow: -10px 10px 0px 1px #ec1d25;
    padding: 0 0 34px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -100px;
    /* position: relative; */

    h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 90px;
      color: #ec1d25;
      line-height: 65px;
      letter-spacing: 8px;

      span {
        font-size: 36px;
        color: #1d1f29;
      }
    }

    button {
      padding: 9px 50px;
      font-size: 36px;
      color: #fff;
      background-color: #ec1d25;
      position: absolute;
      bottom: -40px;
      transform: rotate(5deg);
      transition: transform 1s;

      &:hover {
        transform: rotate(5deg) scale(1.1);
      }
    }
  }
`;
