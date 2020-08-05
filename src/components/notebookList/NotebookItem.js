import React from "react";
import { Link } from "react-router-dom";

const NotebookItem = ({ notebook }) => {
  return (
    <div>
      <Link to={`/notebooks/${notebook.slug}`}>
        <h2>{notebook.name}</h2>
      </Link>
    </div>
  );
};

export default NotebookItem;
