import React from "react";
import { observer } from "mobx-react";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

const NoteItem = ({ note }) => {
  return (
    <div className="container-fluid">
      <h2 className="row">
        {note.title} <UpdateButton note={note} />{" "}
        <DeleteButton noteId={note.id} />
      </h2>
      <h4>{note.body}</h4>
    </div>
  );
};

export default observer(NoteItem);
