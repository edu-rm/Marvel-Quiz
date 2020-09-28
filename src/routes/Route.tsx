import React from "react";
import { Route as ReactRoute, RouteProps, Redirect } from "react-router-dom";

import { useQuiz } from "../hooks/quiz";

interface IRouterProps extends RouteProps {
  results?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouterProps> = ({
  results = false,
  component: Component,
  path,
  ...rest
}) => {
  const { requested } = useQuiz();

  if (results && !requested) {
    return <Redirect to="/quiz" />;
  }

  return <ReactRoute {...rest} render={() => <Component />} />;
};

export default Route;
