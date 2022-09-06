import React from "react";
import SideBar from "../Menu/SideBar";
import TopBar from "../Menu/TopBar";
import Main from "../../styles/main";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <Main>
        <SideBar />
        {children}
      </Main>
    </>
  );
};

export default Layout;
