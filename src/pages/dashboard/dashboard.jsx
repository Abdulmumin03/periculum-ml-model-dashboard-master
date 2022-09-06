import React, { useCallback } from "react";
import Dropzone from "react-dropzone";
import Layout from "../../components/Layout/layout";
import styled from "styled-components";
import { Container } from "../../styles/container";
import { Link } from "react-router-dom";
import {
  BigTick,
  ButtonChart,
  PaperDownload,
  PaperUpload,
  SmallTick,
} from "../../assets/svg";
import backgroundImg from "../../assets/icons/dash-icon.svg";
const Dashboard = () => {
  const [uplaod, setUpload] = React.useState(false);
  const [download, setDownload] = React.useState(false);
  const [uploadSuccess, setUploadSuccess] = React.useState(false);
  const handleUpload = () => {
    setUpload(!uplaod);
  };
  const handleDownload = () => {
    setDownload(!download);
  };
  const handleUploadSuccess = () => {
    setUploadSuccess(!uploadSuccess);
  };
  return (
    <>
      {" "}
      {uplaod && (
        <ModalUpload>
          <p className="close" onClick={handleUpload}>
            X
          </p>

          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className="modal">
                <h2>Upload .csv file</h2>
                <div
                  className="file-input"
                  onClick={handleUploadSuccess}
                  // un-comment this line for normal function {...getRootProps()}
                >
                  <PaperDownload />
                  <input {...getInputProps()} />
                  <p className="text">Drag &amp; Drop your file here</p>
                  <p className="text2">
                    or <span>Select file here</span>
                  </p>
                </div>
                <p className="footer-text" onClick={handleDownload}>
                  Download sample .csv file here
                </p>
                {download && (
                  <DownloadSuccess>
                    <SmallTick /> <p>Download Successful</p>
                  </DownloadSuccess>
                )}
              </section>
            )}
          </Dropzone>
        </ModalUpload>
      )}
      {uploadSuccess && (
        <ModalUploadSuccess>
          <p className="close" onClick={handleUploadSuccess}>
            X
          </p>

          <section className="modal">
            <BigTick />
            <h2>Upload Successful</h2>
            <Link to="/reports/new">View report</Link>
          </section>
        </ModalUploadSuccess>
      )}
      <Layout>
        <Container>
          <Welcome>
            <Header>Get started with your analytics</Header>
            <Grid>
              <ButtonW to="/reports/all">
                <ButtonChart /> <p>Check churn from database</p>
              </ButtonW>
              <ButtonP onClick={handleUpload}>
                <PaperUpload /> <p>Upload file</p>
              </ButtonP>
            </Grid>
          </Welcome>
        </Container>
      </Layout>
    </>
  );
};
const ModalUpload = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  & .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 16px;
    cursor: pointer;
    font-family: "Gilroy-SemiBold";
    color: #fff;
    font-size: 24px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 16px;
  }
  & .modal {
    max-width: 585px;
    width: 90%;
    max-height: 355px;
    height: 100%;
    background-color: #fff;
    padding: 46px 32px;
    position: relative;

    & h2 {
      font-family: "Gilroy-ExtraBold";
      font-size: 24px;
      line-height: 28px;
      color: #363c4f;
      margin-bottom: 16px;
    }
    & .file-input {
      border: 1px dashed ${(props) => props.theme.colors.primary};
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 32px;
    }
    & .text {
      font-family: "Gilroy-SemiBold";
      font-size: 18px;
      line-height: 21px;
      color: #363c4f;
      margin-bottom: 8px;
    }
    & .text2 {
      font-family: "Gilroy-SemiBold";
    }
    & .text2 span {
      font-family: "Gilroy-SemiBold";
      font-size: 16px;
      line-height: 19px;

      color: ${(props) => props.theme.colors.primary};
    }
    & .footer-text {
      font-family: "Gilroy-Medium";
      font-size: 14px;
      line-height: 16px;
      /* identical to box height */

      text-align: center;
      text-decoration-line: underline;

      color: #1f3040;
      margin-bottom: 16px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
const ModalUploadSuccess = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  & .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 16px;
    cursor: pointer;
    font-family: "Gilroy-SemiBold";
    color: #fff;
    font-size: 24px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 16px;
  }
  & .modal {
    max-width: 585px;
    width: 90%;
    max-height: 355px;
    height: 100%;
    background-color: #fff;
    padding: 46px 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h2 {
      font-family: "Gilroy-ExtraBold";
      font-size: 28px;
      line-height: 33px;
      text-align: center;

      color: ${(props) => props.theme.colors.primary};

      margin: 16px 0px;
    }
    & a {
      text-decoration: none;
      background-color: ${(props) => props.theme.colors.primary};
      padding: 16px 32px;
      font-family: "Gilroy-ExtraBold";
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: ${(props) => props.theme.colors.white};
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.primary};
        border: 0.1px solid ${(props) => props.theme.colors.primary};
        transition: 0.3s;
    }
  }
`;
const Welcome = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 64px;
  padding: 64px;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 250px;
  @media screen and (max-width: 1300px) {
    background-image: none;
  }
  @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 32px;
  }
`;
const Header = styled.h1`
  font-family: "Gilroy-Bold";
  font-size: 40px;
  line-height: 47px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 32px;
  @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
    font-size: 32px;
    line-height: 40px;
  }
  @media screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 24px;
    line-height: 32px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 32px;
  max-width: 596px;
  @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
const ButtonW = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;

  & p {
    font-family: "Gilroy-Bold";
    font-family: "Gilroy-SemiBold";
    font-size: 20px;
    line-height: 23px;
    color: ${(props) => props.theme.colors.secondary};
  }
  &:hover {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.white};
    & p {
      color: ${(props) => props.theme.colors.white};
    }
    ,
    & svg path {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;
const ButtonP = styled.div`
  text-decoration: none;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;

  & p {
    font-family: "Gilroy-Bold";
    font-family: "Gilroy-SemiBold";
    font-size: 20px;
    line-height: 23px;
    color: ${(props) => props.theme.colors.white};
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.white};
    & p {
      color: ${(props) => props.theme.colors.secondary};
    }
    ,
    & svg path {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;
const DownloadSuccess = styled.div`
  background-color: #e8fff8;
  padding: 16px 8px;
  display: flex;
  gap: 8px;
  max-width: 178.19px;
  align-items: center;
  border: 0.614458px solid #0cbc8b;
  margin: 0 auto;
  & p {
    font-family: "Gilroy-SemiBold";
    font-size: 12.2892px;
    line-height: 14px;
    /* identical to box height */

    color: #000000;
  }
`;
export default Dashboard;
