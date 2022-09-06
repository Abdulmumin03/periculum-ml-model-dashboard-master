import styled from "styled-components";

export const SpaceBetween = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-direction: column;
    gap: 16px;
  }
`;
