import React, { useState } from "react";
import Modal from "react-modal";

//Styling
import { CreateButtonStyled, ModalStyle } from "./styles";

const NotebookModal = ({ isOpen, closeModal }) => {
  const [notebook, setNotebook] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setNotebook({ ...notebook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(notebook);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={ModalStyle}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center" }}>Create New Notebook</h3>
        <div className="form-group row">
          <div className="col-12">
            <label>Name</label>
            <input
              type="text"
              required
              className="form-control"
              name="name"
              onChange={handleChange}
              value={notebook.name}
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

export default NotebookModal;
