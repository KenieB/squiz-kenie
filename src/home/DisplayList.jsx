import { useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import { loadList } from "../utils/api";
import ListItemLayout from "./ListItemLayout";

function DisplayList({ employerList, setEmployerList, appErr, setAppErr }) {
  const navigate = useNavigate();
  // const { path } = useMatch();

  async function getList() {
    const abortController = new AbortController();
    setAppErr(null);
    try {
      const response = await loadList(abortController.signal);
      setEmployerList(response);
    } catch (error) {
      setAppErr(error);
    }

    return () => abortController.abort();
  }

  const list = employerList.map((listItem) => (
    <ListItemLayout key={listItem.id} itm={listItem} />
  ));


  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Col id="display-list-col" className="py-2">
        <CardGroup className="w-100 justify-content-center">{list}</CardGroup>
      </Col>
    </>
  );
}

export default DisplayList;
