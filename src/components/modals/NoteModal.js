import React, { useState } from "react";
import Modal from "react-modal";
import noteStore from "../../stores/noteStore";

//Markdown
import TextareaAutosize from "react-textarea-autosize";

//Styling
import { CreateButtonStyled, ModalStyle } from "./styles";
import { observer } from "mobx-react";

const NoteModal = ({ isOpen, closeModal, notebook, oldNote }) => {
  const [note, setNote] = useState(
    oldNote ?? {
      title: "",
      body: "",
      tags: "",
    }
  );

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteStore[oldNote ? "updateNote" : "createNote"](note, notebook);
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
        <h3 style={{ textAlign: "center" }}>
          {oldNote ? "Update your Note" : "Create New Note"}
        </h3>
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
            <TextareaAutosize
              type="text"
              placeholder="Write your Note"
              required
              className="form-control"
              name="body"
              onChange={handleChange}
              value={note.body}
            />
          </div>
          <div className="col-12">
            <label>Select Tag:</label>

            <select
              id={note.id}
              name="tags"
              className="form-control"
              onChange={handleChange}
              defaultValue="tagless"
            >
              <option value="tagless" disabled>
                Tags
              </option>

              {noteStore.tags.map((tag) => (
                <option value={tag}>{tag}</option>
              ))}
            </select>
            <div className="col-12">
              <label>Custom Tag:</label>
              <input
                type="text"
                placeholder="Custom Tag"
                className="form-control"
                name="tags"
                onChange={handleChange}
                value={note.tags}
              />
            </div>
          </div>
        </div>

        <CreateButtonStyled className="btn float-right">
          {oldNote ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default observer(NoteModal);
