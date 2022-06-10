import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Layout() {
  return (
    <Row style={{ height: "100vh" }} id="root-layout-row">
      <Col
        xs={12}
        lg={{ span: 10, offset: 1 }}
        id="root-layout-col"
        className="mx-0 mx-lg-auto"
      >
        <Container
          fluid
          className="bg-light overflow-scroll border border-secondary rounded-3 px-0 px-sm-auto"
          style={{ height: "90vh", marginTop: "5vh" }}
          id="root-layout-container"
        >
          <Outlet />
        </Container>
      </Col>
    </Row>
  );
}

export default Layout;
