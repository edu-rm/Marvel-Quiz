import styled, { css } from "styled-components";

interface IContainerProps {
  existsResults: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 0 8px;
    font-size: 20px;
  }

  .results {
    background-color: white;
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: 100%;
    ${(props) =>
      props.existsResults &&
      css`
        border: 1px solid rgba(236, 29, 37, 1);
      `}

    span {
      width: 100%;
      padding: 8px 10px;
      cursor: pointer;

      &:hover {
        background-color: rgba(236, 29, 37, 1);
        color: #fff;
      }
    }
  }
`;
