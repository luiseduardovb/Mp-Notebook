import styled from "styled-components";

import { AiOutlinePlusCircle } from "react-icons/ai";

import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

export const AddButtonStyled = styled(AiOutlinePlusCircle)`
  font-size: 2rem;

  :hover {
    cursor: pointer;
  }
`;

export const UpdateButtonStyled = styled(FaRegEdit)`
  font-size: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 310px;

  :hover {
    cursor: pointer;
  }
`;

export const DeleteButtonStyled = styled(AiOutlineDelete)`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 360px;

  color: red;
  :hover {
    cursor: pointer;
  }
`;
