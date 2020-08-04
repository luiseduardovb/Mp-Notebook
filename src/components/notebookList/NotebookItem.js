import React from "react";

const NotebookItem = ({ notebook }) => {
  return (
    <div>
      <h2>{notebook.name}</h2>
    </div>
  );
};

export default NotebookItem;
