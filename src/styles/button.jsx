import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonPrimary = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  & p {
    font-family: "Gilroy-SemiBold";

    font-size: ${(props) => props.fontSize || "13.9682px"};
    line-height: ${(props) => props.lineHeight || "16px"};
    /* identical to box height */

    /* Color/Primary/05 */

    color: #ffffff;
    color: ${(props) => props.theme.colors.white};
  }
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    & p {
      color: ${(props) => props.theme.colors.secondary};
    }
    ,
    & svg path {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;
export const ButtonSecondary = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.white};

  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;


  & p {
    font-family: "Gilroy-Bold";
    font-family: "Gilroy-SemiBold";
     font-size: ${(props) => props.fontSize || "12.5714px"};
    line-height:  ${(props) => props.lineHeight || "15px"};

    color: ${(props) => props.theme.colors.secondary};
  }
  &:hover {
    background-color: transparent;
  
    & p {
      color: ${(props) => props.theme.colors.black};
    }
    ,
   
  }
`;
