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

  createNote = async (newNote, notebookId) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/${notebookId}/notes`,
        newNote
      );
      this.notes.push(res.data);
    } catch (error) {
      console.error("NoteStore -> createNote -> error", error);
    }
  };
}

decorate(NoteStore, { notes: observable });

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
