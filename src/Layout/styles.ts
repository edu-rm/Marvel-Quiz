import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #325278 25.52%, #1d1f29 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .red-line {
    width: 100%;
    background: #ec1d25;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }

  #not-found {
    font-size: 102px;
    color: white;
  }
`;
