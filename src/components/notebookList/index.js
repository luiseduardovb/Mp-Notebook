import React from "react";
import NotebookItem from "./NotebookItem";
import notebookStore from "../../stores/notebookStore";
import AddButton from "../buttons/AddButton";
import { observer } from "mobx-react";
import { Main, NotebookRow, PageContent, PageTitle } from "./styles";

const NotebookList = () => {
  const notebookList = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} />
  ));

  return (
    <>
      <PageTitle>Notebooks</PageTitle>

      <Main>
        <PageContent>
          <NotebookRow>{notebookList}</NotebookRow>
          <AddButton />
        </PageContent>
      </Main>
    </>
  );
};

export default observer(NotebookList);
