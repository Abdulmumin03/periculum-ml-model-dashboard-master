import React from "react";
import styled from "styled-components";
import { GreenTick } from "../../assets/svg";
const DownloadSuccess = () => {
  return (
    <ModalUploadSuccess>
      <section className="modal">
        <GreenTick />
        <h2>Download Successful</h2>
      </section>
    </ModalUploadSuccess>
  );
};
const ModalUploadSuccess = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  right: 0;
    top: 0;
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
    max-width: 530px;
    width: 90%;
    max-height: 233px;
    height: 100%;
    background-color: #fff;
    padding: 46px 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h2 {
      
    font-family: 'Gilroy-SemiBold';
font-size: 30px;
line-height: 35px;
      text-align: center;

      color: ${(props) => props.theme.colors.black};

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
export default DownloadSuccess;
