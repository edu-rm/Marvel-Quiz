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

  return (
    <ReactRoute
      {...rest}
      render={() =>
        results && !requested ? (
          <Redirect to={{ pathname: "/quiz" }} />
        ) : (
          <Component />
        )
      }
    />
  );
};

export default Route;
