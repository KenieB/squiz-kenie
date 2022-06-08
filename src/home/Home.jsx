import { useNavigate } from "react-router-dom";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import ErrorAlert from "../utils/ErrorAlert";
import DisplayList from "./DisplayList";

function Home({
  employerList,
  setEmployerList,
  sortListBy,
  setSortListBy,
  filterListBy,
  setFilterListBy,
  filterListFlag,
  setFilterListFlag,
  countryFilterOptions,
  setCountryFilterOptions,
  industryFilterOptions,
  setIndustryFilterOptions,
  appErr,
  setAppErr,
}) {
  const navigate = useNavigate();

  return (
    <>
      <Row id="home-error-row" className="w-100 align-content-center">
        <Col>
          <ErrorAlert error={appErr} />
        </Col>
      </Row>
      <Container
        fluid
        id="home-root-container"
        className="d-flex justify-content-center h-100 flex-wrap"
      >
        <Row
          id="home-root-row"
          xs={1}
          lg={2}
          className="w-100 h-100"
        >
          <Col
            id="home-options-col"
            className="align-items-center"
            xs={12}
            lg={3}
            xl={{ span: 2, offset: 1 }}
          >
            <Row id="home-options-row" className="h-100 pt-3 pt-lg-2">
              <Container fluid className=""><h1>OPTIONS</h1></Container>
            </Row>
          </Col>
          <Col
            id="home-content-col"
            className="align-items-center"
            xs={12}
            lg={9}
            xl={{ span: 8, offset: 1 }}
          >
            <Row id="home-content-row" className="h-100">
              <Container fluid className="m-lg-2">
                <DisplayList
                  employerList={employerList}
                  setEmployerList={setEmployerList}
                  appErr={appErr}
                  setAppErr={setAppErr}
                />
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
