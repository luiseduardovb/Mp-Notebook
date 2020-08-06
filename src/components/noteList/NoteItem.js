import React from "react";
import { observer } from "mobx-react";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";
import { StyledP, StyledT, MarkdownText } from "./styles";
import noteStore from "../../stores/noteStore";

const NoteItem = ({ note }) => {
  return (
    <>
      <StyledP>
        <MarkdownText source={note.title} />
        <UpdateButton note={note} />
        <MarkdownText source={note.body} />
      </StyledP>
      <StyledT>
        <MarkdownText
          source={noteStore.tags.find((_tag) => _tag.id === +note.tag)}
        />
        <DeleteButton noteId={note.id} />
      </StyledT>
    </>
  );
};

export default observer(NoteItem);
