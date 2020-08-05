import React from "react";
import { observer } from "mobx-react";

const NoteItem = ({ note }) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <h4>{note.body}</h4>
    </div>
  );
};

export default observer(NoteItem);
