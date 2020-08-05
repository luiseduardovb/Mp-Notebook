import React from "react";
import { DeleteButtonStyled } from "./styles";
import noteStore from "../../stores/noteStore";

const DeleteButton = ({ noteId }) => {
  const handleDelete = () => {
    noteStore.deleteNote(noteId);
  };

  return (
    <div>
      <DeleteButtonStyled onClick={handleDelete} />
    </div>
  );
};

export default DeleteButton;
