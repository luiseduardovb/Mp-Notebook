import React, { useState } from "react";
import Modal from "react-modal";
import noteStore from "../../stores/noteStore";

//Styling
import { CreateButtonStyled, ModalStyle } from "./styles";

const NoteModal = ({ isOpen, closeModal, notebookId }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteStore.createNote(note, notebookId);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={ModalStyle}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center" }}>Create New Note</h3>
        <div className="form-group row">
          <div className="col-12">
            <label>Title:</label>
            <input
              type="text"
              placeholder="Note Title"
              required
              className="form-control"
              name="title"
              onChange={handleChange}
              value={note.title}
            />
          </div>
          <div className="col-12">
            <label>Your Note:</label>
            <textArea
              type="text"
              placeholder="Write your Note"
              required
              className="form-control"
              name="body"
              onChange={handleChange}
              value={note.body}
            />
          </div>
        </div>

        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default NoteModal;
