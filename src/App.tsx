import React from "react";

import Home from "./pages/Home";
import GlobalStyles from "./styles/global";
import PageLayout from "./Layout/PageLayout";

function App() {
  return (
    <>
      <PageLayout>
        <Home />
      </PageLayout>

      <GlobalStyles />
    </>
  );
}

export default App;
