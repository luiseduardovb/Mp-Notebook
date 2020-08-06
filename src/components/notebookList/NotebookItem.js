import React from "react";
import { Link } from "react-router-dom";
import { CustomCol, NotebookBox, StyledP } from "./styles";

const NotebookItem = ({ notebook }) => {
  return (
    <CustomCol className="col">
      <Link to={`/notebooks/${notebook.slug}`}>
        <NotebookBox className="container">
          <StyledP>{notebook.name}</StyledP>
        </NotebookBox>
      </Link>
    </CustomCol>
  );
};

export default NotebookItem;
