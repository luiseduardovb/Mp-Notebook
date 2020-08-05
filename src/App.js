import React from "react";
import NotebookList from "./components/notebookList";
import { Route, Switch } from "react-router";
import NotebookDetail from "./components/notebookDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/notebooks/:notebookSlug">
          <NotebookDetail />
        </Route>
        <Route path="/notebooks">
          <h1>Notebooks:</h1>
          <NotebookList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
