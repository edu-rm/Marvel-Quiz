import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 26px;
  position: relative;

  span {
    position: absolute;
    font-size: 14px;
    color: #ec1d25;
    top: 100%;
  }

  p {
    text-align: left;
    width: 100%;
  }

  input {
    /* text-align: center;  */
    color: #ec1d25;
    width: 100%;
    border: 1px solid #ec1d25;
    padding: 0 10px;
    font-size: 22px;
  }

  & + div {
    margin-top: 38px;
  }
`;
