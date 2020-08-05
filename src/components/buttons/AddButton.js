import React, { useState } from "react";

//Styling
import { AddButtonStyled } from "./styles";
import NotebookModal from "../modals/NotebookModal";
import NoteModal from "../modals/NoteModal";

const AddButton = ({ notebookId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <AddButtonStyled onClick={openModal} />
      {notebookId ? (
        <NoteModal
          notebookId={notebookId}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : (
        <NotebookModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;
