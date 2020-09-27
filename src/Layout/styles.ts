import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #325278 0%, #1d1f29 64.06%);

  .red-line {
    width: 100%;
    background: #ec1d25;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
