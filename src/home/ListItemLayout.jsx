import { useMatch, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

function ListItemLayout({ itm = {} }) {
  const navigate = useNavigate();
  // const { path } = useMatch();
  const smCpStyle = { fontVariant: "small-caps" };
  const cardHdrStyle = { ...smCpStyle, letterSpacing: "0.25em" };
  const cardSubHdrStyle = { ...smCpStyle, letterSpacing: "0.1em" };

  return (
    <>
      <Row className="w-100 justify-content-center m-0">
        <Col xs={12} className="py-1">
          <Card className="p-0 border border-3 border-dark rounded bg-dark">
            <Card.Header
              className="fw-bold bg-info text-body fs-5"
              style={cardHdrStyle}
            >
              {itm.name}
            </Card.Header>
            <Card.Body className="bg-dark py-2">
              <Row
                id="item-country-row"
                className="pb-2 justify-content-between"
              >
                <Col
                  xs={4}
                  lg={5}
                  id="item-subheader-col-country"
                  style={smCpStyle}
                  className="d-flex align-items-center"
                >
                  <Card.Text
                    id="item-subheader-country"
                    className="text-start fw-light text-info flex-fill fw-bold"
                    style={cardSubHdrStyle}
                  >
                    Country:
                  </Card.Text>
                </Col>
                <Col
                  xs={8}
                  lg={6}
                  xl={5}
                  id="item-data-col-country"
                  className="d-flex align-items-center"
                >
                  <Card.Text
                    id="item-data-country"
                    className="text-end text-light flex-fill"
                  >
                    {itm.country}
                  </Card.Text>
                </Col>
              </Row>
              <Row id="itm-divider">
                <hr className="bg-info m-0 rounded-3" style={{ height: "0.2em" }} />
              </Row>
              <Row
                id="item-industry-row"
                className="py-2 justify-content-between"
              >
                <Col
                  xs={4}
                  lg={5}
                  id="item-subheader-col-industry"
                  style={smCpStyle}
                  className="d-flex align-items-center"
                >
                  <Card.Text
                    id="item-subheader-industry"
                    className="text-start fw-light text-info flex-fill fw-bold"
                    style={cardSubHdrStyle}
                  >
                    Industry:
                  </Card.Text>
                </Col>
                <Col
                  xs={8}
                  lg={6}
                  xl={5}
                  id="item-data-col-industry"
                  className="d-flex align-items-center"
                >
                  <Card.Text
                    id="item-data-industry"
                    className="text-end text-light flex-fill"
                  >
                    {itm.industry}
                  </Card.Text>
                </Col>
              </Row>
              <Row id="itm-divider">
                <hr className="bg-info m-0 rounded-3" style={{ height: "0.2em" }} />
              </Row>
              <Row
                id="item-employees-row"
                className="pt-2 justify-content-between"
              >
                <Col
                  xs={4}
                  lg={5}
                  id="item-subheader-col-employees"
                  style={smCpStyle}
                  className="d-flex align-items-center"
                >
                  <Card.Text
                    id="item-subheader-employees"
                    className="text-start fw-light text-info fw-bold flex-fill"
                    style={cardSubHdrStyle}
                  >
                    Number of Employees:
                  </Card.Text>
                </Col>
                <Col
                  xs={8}
                  lg={6}
                  xl={5}
                  id="item-data-col-employees"
                  className="d-flex align-items-center"
                >
                  <Card.Text
                    id="item-data-employees"
                    className="text-end text-light flex-fill"
                  >
                    {itm.numberOfEmployees}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ListItemLayout;
