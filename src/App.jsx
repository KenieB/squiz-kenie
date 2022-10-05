import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import NotFound from "./utils/NotFound";

function App() {
  const [employerList, setEmployerList] = useState([]);
  const [showingList, setShowingList] = useState([]);
  const [sortListBy, setSortListBy] = useState("");
  // sortListBy possible values: [ "name-asc", "name-desc", "employees-asc", "employees-desc" ]
  const [filterListByCountry, setFilterListByCountry] = useState("");
  const [filterListByIndustry, setFilterListByIndustry] = useState("");
  const [countryFilterOptions, setCountryFilterOptions] = useState([]);
  const [industryFilterOptions, setIndustryFilterOptions] = useState([]);
  const [countryFilterMap, setCountryFilterMap] = useState(new Map());
  const [industryFilterMap, setIndustryFilterMap] = useState(new Map());
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
                showingList={showingList}
                setShowingList={setShowingList}
                sortListBy={sortListBy}
                setSortListBy={setSortListBy}
                filterListByCountry={filterListByCountry}
                setFilterListByCountry={setFilterListByCountry}
                filterListByIndustry={filterListByIndustry}
                setFilterListByIndustry={setFilterListByIndustry}
                countryFilterOptions={countryFilterOptions}
                setCountryFilterOptions={setCountryFilterOptions}
                industryFilterOptions={industryFilterOptions}
                setIndustryFilterOptions={setIndustryFilterOptions}
                countryFilterMap={countryFilterMap}
                setCountryFilterMap={setCountryFilterMap}
                industryFilterMap={industryFilterMap}
                setIndustryFilterMap={setIndustryFilterMap}
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
