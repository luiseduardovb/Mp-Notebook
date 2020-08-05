import React from "react";
import { observer } from "mobx-react";

//Components
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
  const noteList = notes.map((note) => <NoteItem note={note} />);
  return (
    <div>
      <div>{noteList}</div>
    </div>
  );
};

export default observer(NoteList);
