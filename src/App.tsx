import React from "react";

import GlobalProvider from "./hooks/GlobalProvider";

import Routes from "./routes";

import GlobalStyles from "./styles/global";
import PageLayout from "./Layout/PageLayout";

function App() {
  return (
    <GlobalProvider>
      <PageLayout>
        <Routes />
      </PageLayout>

      <GlobalStyles />
    </GlobalProvider>
  );
}

export default App;
