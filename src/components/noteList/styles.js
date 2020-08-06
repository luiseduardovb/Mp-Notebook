import styled from "styled-components";

export const NotebookRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
`;

export const CustomCol = styled.div`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 20%;
  max-width: 20%;
  margin-bottom: 30px;
`;

export const NoteBox = styled.div`
  background-color: black;
  background-image: url(https://lh3.googleusercontent.com/proxy/kpseAHUw_MWz353CrzsMB71Elx3ja53yac4FCAZ-ZAV_-aIQbn8ud8g7KKsvMlL0hdeiPvvo6ziUbxo3X_AfUv6Uvg);
  padding: 20px 15px 20px 15px;
  /* background-position: 12px center; */
  background-size: cover;
  text-align: center;
  border-radius: 8px;
  background-repeat: no-repeat;
  width: 800px;
  height: 500px;
  margin-right: auto;
  margin-left: auto;
`;
export const NotebookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledP = styled.p`
  font-size: 20px;
  margin-top: auto;
  margin-bottom: auto;
  color: black;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`;
export const Main = styled.main`
  min-height: 250px;
  width: 100%;
  padding-left: 260px;
  transition: all 0.5s;
  transform: translateZ(0);
  display: block;
`;

export const PageContent = styled.div`
  padding: 20px;
`;

export const PageTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
  color: black;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
  text-align: left;
`;
