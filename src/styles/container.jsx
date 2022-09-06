import styled from "styled-components";
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 64px;
  overflow-y: auto;
  overflow-x: hidden;
  width: calc(100% - 274px);
  margin-left: 274px;
  height: calc(100vh -89px);
  margin-top: 89px;

  @media screen and (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 32px;
    width: 100%;
    margin-left: 0px;
  }
  @media screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 16px;
    width: 100%;
    margin-left: 0px;
  }
`;
