import React, { useState } from "react";
import { UpdateButtonStyled } from "./styles";
import NoteModal from "../modals/NoteModal";

const UpdateButton = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal} />
      <NoteModal isOpen={isOpen} closeModal={closeModal} oldNote={note} />
    </>
  );
};

export default UpdateButton;
