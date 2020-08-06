import React from "react";
import { useParams, Link } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import notebookStore from "../../stores/notebookStore";
import noteStore from "../../stores/noteStore";

import NoteList from "../noteList";

//Components
import AddButton from "../buttons/AddButton";

const NotebookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.slug === notebookSlug
  );

  let notes = notebook.notes
    .map((note) => noteStore.getNoteById(note.id))
    .filter((note) => note);

  const filterTag = (tag) => {
    notes = notes.filter((note) => note.tags.id === tag);

    // notes = notes.filter((note) => {
    //   note.tags = tag;
    // });
  };

  return (
    <div>
      <Link to="/notebooks">Back</Link>
      <h1>{notebook.name} Notebook:</h1>
      <h2>Tags:</h2>
      {noteStore.tags.map((tag) => (
        <button onClick={filterTag(tag.id)}>{tag}</button>
      ))}
      <NoteList notes={notes} />
      <AddButton notebook={notebook} />
    </div>
  );
};

export default observer(NotebookDetail);
