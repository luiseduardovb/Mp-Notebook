import React from "react";
import NotebookItem from "./NotebookItem";
import notebookStore from "../../stores/notebookStore";

const NotebookList = () => {
  const notebookList = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} />
  ));

  return <div>{notebookList}</div>;
};

export default NotebookList;
