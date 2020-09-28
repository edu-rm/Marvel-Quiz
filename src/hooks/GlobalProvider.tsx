import React from "react";

import { QuizProvider } from "./quiz";

const GlobalProvider: React.FC = ({ children }) => {
  return <QuizProvider>{children}</QuizProvider>;
};

export default GlobalProvider;
