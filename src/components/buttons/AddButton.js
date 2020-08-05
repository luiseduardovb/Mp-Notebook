import React, { useState } from "react";

//Styling
import { AddButtonStyled } from "./styles";
import NotebookModal from "../modals/NotebookModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <AddButtonStyled onClick={openModal} />
      <NotebookModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddButton;
