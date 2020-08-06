import styled from "styled-components";

export const NotebookRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const CustomCol = styled.div`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 20%;
  max-width: 20%;
  margin-bottom: 30px;
`;

export const NotebookBox = styled.div`
  background-color: black;
  background-image: url(https://lh3.googleusercontent.com/proxy/iftv1ws4jOLd4GZeX6tQhyOR6Cbnl8hri5b3GAR2LOII6drqTmAVMhJNC1AGPPQRp1xdTzBvVZkg7pUgF4pi1BrJnmzR77IDGM7iIBrN3LAd-KFCB2Y8w25X12vK8nYk9HBF6iehgdD5l1PbLWkHKRI);
  padding: 20px 15px 20px 15px;
  /* background-position: 12px center; */
  background-size: cover;
  text-align: center;
  border-radius: 8px;
  background-repeat: no-repeat;
  width: 200px;
  height: 300px;
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
  line-height: 1;
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
  margin-bottom: 50px;
  color: black;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 50px;
  text-align: center;
`;
