import React from "react";
import styled from "styled-components";

import Antenna from "../../../assets/images/AntennaBar.png";
import user from "../../../assets/images/user.png";
import { MenuIcon } from "../../../assets/svg";
import $ from "jquery";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Div>
      <Menu className="toggleSidebar" />
      <Logo to="/">
        <img src={Antenna} /> <h2>Analytics</h2>
      </Logo>
      <User src={user} />
    </Div>
  );
};
$(document).on("click", ".toggleSidebar", function () {
  if ($(".sideBar").hasClass("activateSidebar")) {
    $(".sideBar").removeClass("activateSidebar");
  } else {
    $(".sideBar").addClass("activateSidebar");
  }
});

const Menu = styled(MenuIcon)`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border-bottom: 2px solid #e2e2e2;
  height: 89px;
  position: fixed;
  @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
    height: 60px;
    padding: 20px 20px;
  }
  & h2 {
    font-family: "Aeonik Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 31.6535px;
    line-height: 36px;
    color: ${(props) => props.theme.colors.primary};
    @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
      font-size: 20px;
      line-height: 23px;
    }
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 12px;
  align-items: center;
  & img {
    height: 50px;
    @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 30px;
    }
  }
`;
const User = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: 3px solid #152f57;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 40px;
    height: 40px;
    border: 2px solid #152f57;
  }
`;

export default TopBar;
