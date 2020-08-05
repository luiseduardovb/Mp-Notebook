import React from "react";
import { observer } from "mobx-react";

//Components
import AddButton from "../buttons/AddButton";
import NoteItem from "./NoteItem";

//Stores
import noteStore from "../../stores/noteStore";

const NoteList = () => {
  const noteList = noteStore.notes.map((note) => <NoteItem note={note} />);
  return (
    <div>
      <div>{noteList}</div>
    </div>
  );
};

export default observer(NoteList);
