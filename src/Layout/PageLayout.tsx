import React from "react";

import { Container } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="red-line"></div>
      {children}
    </Container>
  );
};

export default Layout;
