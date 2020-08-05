import React from "react";
import Routes from "./components/Routes";
import notebookStore from "./stores/notebookStore";
import { observer } from "mobx-react";
import { LoadingIcon } from "./styles";

function App() {
  return (
    <div>
      {notebookStore.loading ? (
        <>
          {" "}
          <LoadingIcon />{" "}
        </>
      ) : (
        <Routes />
      )}
    </div>
  );
}

export default observer(App);
