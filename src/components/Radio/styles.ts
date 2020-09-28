import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  font-size: 26px;

  label {
    color: #ec1d25;
  }

  .radio-wrapper {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .radio {
    display: flex;
    align-items: center;

    input {
      margin-right: 12px;
      height: 20px;
      width: 20px;
    }
  }
`;
