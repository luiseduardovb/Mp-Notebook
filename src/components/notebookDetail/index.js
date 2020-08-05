import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import notebookStore from "../../stores/notebookStore";
import notebookList from "../notebookList";

const NotebookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.slug === notebookSlug
  );

  // console.log(notebookStore.notebooks);

  return (
    <div>
      <h1>Notebook</h1>
      <h1>{notebook.name}</h1>
    </div>
  );
};

export default observer(NotebookDetail);
