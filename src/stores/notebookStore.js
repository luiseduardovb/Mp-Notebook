import { decorate, observable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];
  loading = true;

  fetchNotebooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = response.data;
      this.loading = false;
    } catch (error) {
      console.error("NotebookStore -> fetchNotebooks -> error", error);
    }
  };

  createNotebook = async (newNotebook) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/notebooks",
        newNotebook
      );
      this.notebooks.push(res.data);
    } catch (error) {
      console.error("NotebookStore -> createNotebook -> error", error);
    }
  };
}

decorate(NotebookStore, { notebooks: observable, loading: observable });

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();
export default notebookStore;
