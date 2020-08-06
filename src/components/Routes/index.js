import React from "react";
import NotebookList from "../notebookList";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import NotebookDetail from "../notebookDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/notebooks/:notebookSlug">
        <NotebookDetail />
      </Route>
      <Route path="/notebooks">
        <NotebookList />
      </Route>
      <Route path="/">
        <Link to="/notebooks">See your Notebooks</Link>
      </Route>
    </Switch>
  );
};

export default Routes;
