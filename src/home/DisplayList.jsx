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

    try {
      const response = await loadList(abortController.signal);
      setEmployerList(response);
    } catch (error) {
      setAppErr(error);
    }

    return () => abortController.abort();
  }

  /*const list = employerList.map((listItem) => (
    <ListItemLayout key={listItem.id} itm={listItem} />
  ));*/

  const list = employerList.map((listItem) => console.log(listItem));

  useEffect(() => {
    getList();
    //console.log("----------------------- getList() -----------------------");
    //employerList.forEach((r) => console.log(r));
    // console.log("---------------------------------------------------------");
  }, []);

  return (
    <>
      <Col>
        <h2>DisplayList.jsx</h2>
        <CardGroup></CardGroup>
      </Col>
    </>
  );
}

export default DisplayList;
