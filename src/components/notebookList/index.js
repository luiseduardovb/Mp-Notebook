import React from "react";
import NotebookItem from "./NotebookItem";
import notebookStore from "../../stores/notebookStore";
import AddButton from "../buttons/AddButton";

const NotebookList = () => {
  const notebookList = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} />
  ));

  return (
    <>
      <div>{notebookList}</div>
      <AddButton />
    </>
  );
};

export default NotebookList;