import React from "react";
import styled from "styled-components";
import { Home, LogoutIcon } from "../../../assets/svg";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <Div className="sideBar">
      <Item to="/">
        <Home />
        <Text>Dashboard</Text>
      </Item>
      <Logout to="/logout">
        <LogoutIcon />
        <Text2>Log out</Text2>
      </Logout>
    </Div>
  );
};
const Div = styled.div`
  background: ${(props) => props.theme.colors.gray};
  width: 274px;
  padding-top: 120px;
  padding-bottom: 40px;
  position: fixed;
  height: calc(100vh - 89px);
  margin-top: 89px;
  @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
    display: none;
    box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.1);
    transition: 0.5s !important;
    position: fixed;
    height: 100vh;
    margin-top: 60px;
  }
`;
const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  background: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;
const Text = styled.p`
  font-family: "Gilroy-ExtraBold";
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
`;
const Text2 = styled.p`
  font-family: "Gilroy-ExtraBold";
  font-size: 20px;
  line-height: 23px;

  color: ${(props) => props.theme.colors.lightBlue};
`;
const Logout = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  background: transparent;
  text-decoration: none;
  position: absolute;
  bottom: 150px;
  width: 100%;
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: #ffffff;
    transition: 0.3s;
    & svg path {
      fill: #ffffff;
    }
    & ${Text2} {
      color: #ffffff;
    }
  }
`;

export default SideBar;
