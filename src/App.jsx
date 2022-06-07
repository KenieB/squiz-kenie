import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import NotFound from "./utils/NotFound";

function App() {
  const [employerList, setEmployerList] = useState([]);
  const [sortListBy, setSortListBy] = useState("");
  // sortListBy possible values: [ "name-asc", "name-desc", "employees-asc", "employees-desc" ]
  const [filterListBy, setFilterListBy] = useState("");
  // filterListBy possible values: [ "country", "industry" ]
  const [filterListFlag, setFilterListFlag] = useState(false);
  const [countryFilterOptions, setCountryFilterOptions] = useState([]);
  const [industryFilterOptions, setIndustryFilterOptions] = useState([]);
  const [appErr, setAppErr] = useState(null);

  return (
    <Container
      fluid
      className="App justify-content-center m-0"
      id="root-app-container"
    >
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Home
                employerList={employerList}
                setEmployerList={setEmployerList}
                sortListBy={sortListBy}
                setSortListBy={setSortListBy}
                filterListBy={filterListBy}
                setFilterListBy={setFilterListBy}
                filterListFlag={filterListFlag}
                setFilterListFlag={setFilterListFlag}
                countryFilterOptions={countryFilterOptions}
                setCountryFilterOptions={setCountryFilterOptions}
                industryFilterOptions={industryFilterOptions}
                setIndustryFilterOptions={setIndustryFilterOptions}
                appErr={appErr}
                setAppErr={setAppErr}
              />
            }
          />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
