import React from "react";
import {
  ArrowLeft,
  ButtonChart,
  PaperDownload,
  PaperUpload,
  SmallTick,
  BigTick,
  Document,
  DownloadSM,
  Previous,
  Nextpage,
  NextPage,
  Prev,
  Next,
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
const reports = [
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
  {
    name: "9-Feb-22 Report 0001 ",
    number: "200 out of 5000 customers",
  },
];
const History = () => {
  const totalreports = reports.length || 0;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [reportsPerPage] = React.useState(8);
  // Get reports
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentreports = reports.slice(indexOfFirstReport, indexOfLastReport);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalreports / reportsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Layout>
      <Container>
        {/* Header */}
        <SpaceBetween>
          <Back to="/reports/all">
            <ArrowLeft /> <p>Back</p>
          </Back>
        </SpaceBetween>
        {/* Header */}
        {/* Body */}
        <Body>
          <FlexContaineHeader>
            <h2>HISTORY</h2>
            <p>All churn reports generated so far</p>
          </FlexContaineHeader>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Number of customers</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentreports.map((report) => (
                  <tr>
                    <td>{report.name}</td>
                    <td>{report.number}</td>
                    <td>
                      <Buttons>
                        <Button to="/reports/history">
                          <Document /> View report
                        </Button>
                        <Button to="">
                          <DownloadSM />
                          Download as .csv file
                        </Button>
                      </Buttons>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
          {/* //Pagination */}
          <Pagination>
            <Previous
              className={currentPage === 1 ? "icon active" : "icon "}
              onClick={() => paginate(1)}
            />
            <Prev onClick={() => paginate(1)} />
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={number === currentPage ? "active" : ""}
              >
                <a
                  onClick={() => paginate(number)}
                  href="#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}

            <Next onClick={() => paginate(pageNumbers.length)} />
            <NextPage
              className={
                currentPage == pageNumbers.length ? "icon active" : "icon "
              }
              onClick={() => paginate(pageNumbers.length)}
            />
          </Pagination>
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

const Body = styled.div`
  margin-top: 32px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 6px;
  font-family: "Gilroy-SemiBold";
  font-size: 16px;
  line-height: 19px;

  color: #083a9a;
  align-items: center;
`;

const FlexContaineHeader = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
  & h2 {
    font-family: "Gilroy-SemiBold";
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */

    /* Color/Primary/04 */

    color: #363c4f;
    margin-bottom: 4px;
  }
  & p {
    font-family: "Gilroy-Regular";
    font-size: 18px;
    line-height: 21px;

    /* Color/Primary/04 */

    color: #363c4f;
  }
`;
const TableContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
`;
const Table = styled.table`
  margin-top: 32px;
  border-collapse: separate;
  table-layout: fixed;
  width: 80%;
  border-spacing: 0 8px;

  & tbody tr {
    border: 1px solid #b4d2ff !important;
  }
  width: 100%;
  & thead th {
    text-align: left;
    font-family: "Gilroy-SemiBold";
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #363c4f;
    padding: 16px 24px;
  }

  & tr td {
    padding: 32px 24px;
    font-family: "Gilroy-SemiBold";
    font-size: 16px;
    line-height: 19px;

    color: #000000;

    gap: 8px;
    border-width: 1px 0;
    width: 50%;
    border-color: #b4d2ff;
    border-style: solid;
  }
  & tr td:first-child {
    border-left-width: 1px;
  }
  & tr td:last-child {
    border-right-width: 1px;
  }
`;
const Pagination = styled.ul`
  margin-top: 64px;
  display: flex;
  gap: 25px;
  list-style: none;
  align-items: center;
  justify-content: center;

  & a {
    text-decoration: none;
    font-family: "Gilroy-Regular";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

    /* PRIMARY BLUE */

    color: #000;
  }
   "& .active": {
        color: #1162dc !important,
      },
`;

export default History;
