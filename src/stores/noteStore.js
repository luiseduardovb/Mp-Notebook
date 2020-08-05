import { decorate, observable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
    } catch (error) {
      console.error("NoteStore -> fetchNotes -> error", error);
    }
  };

  getNoteById = (noteId) => {
    return this.notes.find((note) => note.id === noteId);
  };

  createNote = async (newNote, notebook) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        newNote
      );
      this.notes.push(res.data);
      notebook.notes.push({ id: res.data.id });
    } catch (error) {
      console.error("NoteStore -> createNote -> error", error);
    }
  };

  updateNote = async (updatedNote) => {
    try {
      //update in backend
      await axios.put(
        `http://localhost:8000/notes/${updatedNote.id}`,
        updatedNote
      );
      //update in frontend
      const note = this.notes.find((note) => note.id === updatedNote.id);
      for (const key in note) note[key] = updatedNote[key];
    } catch (error) {
      console.log("NoteStore -> updatedNote-> error", error);
    }
  };

  deleteNote = async (noteId) => {
    try {
      //delete in the backend
      await axios.delete(`http://localhost:8000/notes/${noteId}`);
      //delete in the frontend
      this.notes = this.notes.filter((note) => note.id !== noteId);
    } catch (error) {
      console.error("NoteStore -> deleteNote -> error", error);
    }
  };
}
decorate(NoteStore, { notes: observable });

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
