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
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;

  .wrapper {
    position: relative;
    animation: ${animationUp} 2s;

    > a {
      position: absolute;
      left: 8px;
      top: 8px;
    }
    margin: 30px 0;

    box-shadow: -10px 10px 0px 1px #ec1d25;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 1000px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      color: #1d1f29;

      h1 {
        font-size: 26px;
        margin-right: 20px;
      }

      .filters {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #1d1f29;
        margin-left: 20px;

        .select {
          position: relative;
        }

        svg {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
        }

        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          font-size: 20px;
          width: 260px;
          padding: 0 8px;
        }
      }
    }
  }

  button {
    color: red;
    background: white;
    font-size: 60px;
    padding: 20px;
  }

  #loading {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    h1 {
      font-size: 102px;
      color: #fff;
    }
  }
`;

export const Cards = styled.div`
  margin-top: 20px;
  width: 80%;

  .card {
    display: flex;
    width: 100%;
    border: 1px solid rgba(236, 29, 37, 1);
    padding: 12px;

    & + div {
      margin-top: 20px;
    }
    h4 {
      font-size: 26px;
      color: #1d1f29;
    }

    h5 {
      font-size: 20px;
      color: #1d1f29;

      span {
        color: #ec1d25;
      }
    }

    > img {
      margin: auto 0;
      border-radius: 8px;

      width: 80px;
      height: 100%;
      margin-right: 20px;
    }

    .series,
    .comics {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;

        & + img {
          margin-left: 12px;
        }
      }
    }
  }
`;
