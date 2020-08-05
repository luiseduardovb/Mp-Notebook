import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import notebookStore from "../../stores/notebookStore";
import NoteList from "../noteList";

//Components
import AddButton from "../buttons/AddButton";

const NotebookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.slug === notebookSlug
  );

  return (
    <div>
      <h1>{notebook.name} Notebook:</h1>

      <NoteList />
      <AddButton notebookId={notebook.id} />
    </div>
  );
};

export default observer(NotebookDetail);
