import React from "react";
import { observer } from "mobx-react";
import { Main, PageContent, PageTitle, NotebookRow, NoteBox } from "./styles";
//Components
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
  const noteList = notes.map((note) => <NoteItem note={note} />);
  return (
    <Main>
      <PageContent>
        <NotebookRow>
          <NoteBox>
            <PageTitle>Notes</PageTitle>
            {noteList}
          </NoteBox>
        </NotebookRow>
      </PageContent>
    </Main>
  );
};

export default observer(NoteList);
