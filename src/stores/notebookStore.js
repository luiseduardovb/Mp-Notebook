import { decorate, observable } from "mobx";
import { notebooks } from "../notebooks";

class NotebookStore {
  notebooks = notebooks;
}

decorate(NotebookStore, { notebooks: observable });

const notebookStore = new NotebookStore();
export default notebookStore;
