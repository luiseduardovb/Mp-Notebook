import React from "react";
import { observer } from "mobx-react";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";
import { StyledP } from "./styles";

const NoteItem = ({ note }) => {
  return (
    <>
      <StyledP>
        {note.title}
        <UpdateButton note={note} />
      </StyledP>
      <StyledP>
        {note.body}
        <DeleteButton noteId={note.id} />
      </StyledP>
    </>
  );
};

export default observer(NoteItem);
