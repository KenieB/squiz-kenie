import { useEffect, useState } from "react";
//import { useMatch, useNavigate } from "react-router-dom";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import ListItemLayout from "./ListItemLayout";
import {
  sortItemsByEmployeesAsc,
  sortItemsByEmployeesDesc,
  sortItemsByNameAsc,
  sortItemsByNameDesc,
} from "../utils/sortUtilities";
import ViewActiveList from "./ViewActiveList";

function DisplayList({
  employerList,
  setEmployerList,
  showingList,
  setShowingList,
  sortListBy,
  filterListByCountry,
  filterListByIndustry,
  appErr,
  setAppErr,
}) {
  const [activeList, setActiveList] = useState([]);

  function processSort(whichList) {
    if (whichList === "showing") {
      const copyShow = [...showingList];
      if (sortListBy === "name-asc") {
        setActiveList([...sortItemsByNameAsc(copyShow)]);
      } else if (sortListBy === "name-desc") {
        setActiveList([...sortItemsByNameDesc(copyShow)]);
      } else if (sortListBy === "employees-asc") {
        setActiveList([...sortItemsByEmployeesAsc(copyShow)]);
      } else if (sortListBy === "employees-desc") {
        setActiveList([...sortItemsByEmployeesDesc(copyShow)]);
      }
    } else if (whichList === "unfiltered") {
      const copyEmpl = [...employerList];
      if (sortListBy === "name-asc") {
        setActiveList([...sortItemsByNameAsc(copyEmpl)]);
      } else if (sortListBy === "name-desc") {
        setActiveList([...sortItemsByNameDesc(copyEmpl)]);
      } else if (sortListBy === "employees-asc") {
        setActiveList([...sortItemsByEmployeesAsc(copyEmpl)]);
      } else if (sortListBy === "employees-desc") {
        setActiveList([...sortItemsByEmployeesDesc(copyEmpl)]);
      }
    }
  }
  useEffect(() => {
    if (showingList.length) {
      setActiveList([...showingList]);
    } else {
      setActiveList([...employerList]);
    }
  }, [showingList, employerList]);

  useEffect(() => {
    if (sortListBy) {
      if (showingList.length) {
        processSort("showing");
      } else {
        processSort("unfiltered");
      }
    }
  }, [sortListBy, showingList, employerList]);

  return (
    <>
      <Col id="display-list-col" className="py-2">
        <CardGroup className="w-100 justify-content-center">
          <ViewActiveList activeList={activeList} appErr={appErr} />
        </CardGroup>
      </Col>
    </>
  );
}

export default DisplayList;
