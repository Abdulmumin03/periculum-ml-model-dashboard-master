import React from "react";
import {
  ArrowLeft,
  ButtonChart,
  PaperDownload,
  PaperUpload,
  SmallTick,
  BigTick,
} from "../../assets/svg";
import Layout from "../../components/Layout/layout";
import { Container } from "../../styles/container";
import { SpaceBetween } from "../../styles/flexContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonPrimary, ButtonSecondary } from "../../styles/button";
import DonutChart from "react-donut-chart";
import { Center } from "../../styles/center";
import StatisticsCard from "../../components/Common/StatisticsCard";
import Dropzone from "react-dropzone";
const dataItems = [
  {
    label: "Sample 1",
    name: "abc",
    age: "22",
    phone: "1234567890",
    value: 30000,
  },
  {
    label: "Sample 2",
    name: "abcd",
    age: "23",
    phone: "1243567890",
    value: 40000,
  },
  {
    label: "Sample 3",
    name: "abdc",
    age: "24",
    phone: "1235467890",
    value: 33000,
  },
  {
    label: "Sample 4",
    name: "asbc",
    age: "21",
    phone: "1245367890",
    value: 35000,
  },
  {
    label: "Sample 5",
    name: "abcf",
    age: "22",
    phone: "1235674890",
    value: 36000,
  },
  {
    label: "Sample 6",
    name: "abc",
    age: "22",
    phone: "1235678940",
    value: 380000,
  },
  {
    label: "Sample 7",
    name: "abcz",
    age: "26",
    phone: "1234567890",
    value: 40000,
  },
  {
    label: "Sample 8",
    name: "zabc",
    age: "27",
    phone: "1234678950",
    value: 30000,
  },
];
const Report = () => {
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
    <Layout>
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
      <Container>
        {/* Header */}
        <SpaceBetween>
          <Back to="/">
            <ArrowLeft /> <p>Back</p>
          </Back>
          <Buttons>
            <ButtonPrimary to="/reports/all">
              <ButtonChart className="reportIcon" />
              <p>Check churn from database</p>
            </ButtonPrimary>
            <ButtonSecondary to="" onClick={handleUpload}>
              <PaperUpload className="uploadIcon" />
              <p> Upload file</p>
            </ButtonSecondary>
          </Buttons>
        </SpaceBetween>
        {/* Header */}
        {/* Body */}
        <Body>
          <FlexContaineHeader>
            <h2>CHURN FOR NEW REPORT</h2>
            <p>
              Date: <span>25, August 2022</span>
            </p>
          </FlexContaineHeader>
          <Center>
            {" "}
            <DonutChart data={dataItems} />
          </Center>
          <StatisticsCard benchmark={70} total={20} outof={50} />
        </Body>
      </Container>
    </Layout>
  );
};

const Back = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  & p {
    font-family: "Gilroy-Bold";
    font-size: 16px;
    line-height: 19px;

    /* Color/Primary/02 */

    color: #407bff;
  }
`;
const Buttons = styled.div`
    display: flex;
   
    align-items: center;
    & .reportIcon path {
        fill: #ffffff;
    }
     & .uploadIcon path {
        fill: ${(props) => props.theme.colors.secondary};
    }

}`;
const Body = styled.div`
  margin-top: 32px;
`;
const ChartContainer = styled.div``;
const FlexContaineHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-direction: column;
  }
  & h2 {
    font-family: "Gilroy-Bold";
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => props.theme.colors.black};
  }
  & p {
    font-family: "Gilroy-Medium";
    font-size: 15px;
    line-height: 18px;
    text-align: right;

    color: ${(props) => props.theme.colors.black};
    & span {
      font-family: "Gilroy-Bold";
    }
  }
`;
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
export default Report;
