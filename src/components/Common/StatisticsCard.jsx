import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import warning from "../../assets/images/Warning.png";
import { ArrowUp, DownloadIcon } from "../../assets/svg";
import DownloadSuccess from "../../components/Common/DownloadSuccess";

const StatisticsCard = (props) => {
  const [download, setDownload] = React.useState(false);
  const handleDownload = () => {
    setDownload(!download);
  };
  return (
    <>
      {download && <DownloadSuccess onClick={handleDownload} />}
      <Container>
        <Flex align="start" mb="32px">
          {" "}
          <Div>
            <Title>
              AT RISK CUSTOMERS <img src={warning} />
            </Title>
            <SubTitle>Customers with a high probability of churn</SubTitle>
          </Div>
          <Mark>
            Benchmark: <span>{props.benchmark}%</span>
          </Mark>
        </Flex>
        <Flex align="end">
          {" "}
          <Div>
            <TotalPer>
              <Div>
                Total Number{" "}
                <span>
                  40% <ArrowUp />
                </span>
              </Div>
            </TotalPer>
            <Total>{props.total}</Total>
            <Text>out of {props.outof} customers</Text>
          </Div>
          <Div>
            <Download onClick={handleDownload}>
              <DownloadIcon />
              Download as .csv file
            </Download>
          </Div>
        </Flex>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 64px 0px;
  background: ${(props) => props.theme.colors.primary};
  padding: 24px 64px;
  color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 16px;
  }
`;
const Div = styled.div``;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => props.align};
  margin-bottom: ${(props) => props.mb || 0};
  @media screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;
const Title = styled.h2`
  font-family: "Gilroy-ExtraBold";
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;
const SubTitle = styled.p`
  font-family: "Gilroy-Medium";
  font-size: 14px;
  line-height: 16px;
`;
const Mark = styled.h5`
  font-family: "Gilroy-Medium";
  font-size: 16px;
  line-height: 19px;
  & span {
    font-family: "Gilroy-ExtraBold";
  }
`;
const TotalPer = styled.div`
  display: flex;
  align-items: end;

  font-family: "Gilroy-Medium";
  font-size: 16px;
  line-height: 19px;

  & span {
    font-family: "Gilroy-Bold";
    margin-left: 8px;
    align-items: center;
    & svg {
      margin-bottom: -4px;
    }
  }
`;
const Total = styled.h3`
  font-family: "Gilroy-ExtraBold";
  font-size: 80px;
  line-height: 94px;
`;
const Text = styled.p`
  font-family: "Gilroy-Bold";
  font-size: 16px;
  line-height: 19px;
`;
const Download = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-family: "Gilroy-SemiBold";
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.white};
`;
export default StatisticsCard;
