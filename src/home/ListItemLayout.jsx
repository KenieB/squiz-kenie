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
          <Card className="p-0 border border-info rounded">
            <Card.Header
              className="fw-bold bg-info text-body fs-5"
              style={cardHdrStyle}
            >
              {itm.name}
            </Card.Header>
            <Card.Body className="bg-dark py-2">
              <Row className="pb-2">
                <Col
                  xs={4}
                  lg={{ span: 4, offset: 1 }}
                  xl={{ span: 5, offset: 1 }}
                  style={smCpStyle}
                  className="d-flex align-items-center"
                >
                  <Card.Text
                    className="text-start fw-light text-info flex-fill fw-bold"
                    style={cardSubHdrStyle}
                  >
                    Country:
                  </Card.Text>
                </Col>
                <Col xs={8} lg={6} xl={5} className="d-flex align-items-center">
                  <Card.Text className="text-end text-light flex-fill">
                    {itm.country}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="py-2 border-top border-bottom border-info">
                <Col
                  xs={4}
                  lg={{ span: 4, offset: 1 }}
                  xl={{ span: 5, offset: 1 }}
                  style={smCpStyle}
                  className="d-flex align-items-center"
                >
                  <Card.Text
                    className="text-start fw-light text-info flex-fill fw-bold"
                    style={cardSubHdrStyle}
                  >
                    Industry:
                  </Card.Text>
                </Col>
                <Col xs={8} lg={6} xl={5} className="d-flex align-items-center">
                  <Card.Text className="text-end text-light flex-fill">
                    {itm.industry}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="pt-2">
                <Col
                  xs={4}
                  lg={{ span: 4, offset: 1 }}
                  xl={{ span: 5, offset: 1 }}
                  style={smCpStyle}
                  className="d-flex align-items-center"
                >
                  <Card.Text
                    className="text-start fw-light text-info fw-bold flex-fill"
                    style={cardSubHdrStyle}
                  >
                    Number of Employees:
                  </Card.Text>
                </Col>
                <Col xs={8} lg={6} xl={5} className="d-flex align-items-center">
                  <Card.Text className="text-end text-light flex-fill">
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
