import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";

import Form from "../pages/Form";
import { List } from "../pages/List";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" component={Form} />
        <Route path="/matches" component={List} results />
        <Route component={() => <h1 id="not-found">404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
