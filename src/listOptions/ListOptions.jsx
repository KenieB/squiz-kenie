import { useState, useEffect } from "react";
//import { useMatch, useNavigate } from "react-router-dom";
import { Container, Row, Col, Stack, Form } from "react-bootstrap";
//import { loadList } from "../utils/api";
//import ListItemLayout from "./ListItemLayout";

function ListOptions({
  setSortListBy,
  setFilterListByCountry,
  setFilterListByIndustry,
  countryFilterOptions,
  industryFilterOptions,
  appErr,
  setAppErr,
}) {
  //const navigate = useNavigate();
  // const { path } = useMatch();

  const countrySelectOptions = countryFilterOptions.map((country, index) => {
    return (
      <option key={index + 1} value={country}>
        {country}
      </option>
    );
  });

  const industrySelectOptions = industryFilterOptions.map((industry, index) => {
    return (
      <option key={index + 1} value={industry}>
        {industry}
      </option>
    );
  });

  const handleSortByChange = ({ target }) => {
    setSortListBy(target.value);
  };

  const handleFilterByCountryChange = ({ target }) => {
    setFilterListByCountry(target.value);
  };

  const handleFilterByIndustryChange = ({ target }) => {
    setFilterListByIndustry(target.value);
  };

  return (
    <>
      <Stack gap={3}>
        <Container fluid className="px-0">
          <Form.Select
            aria-label="Filter list by country"
            onChange={handleFilterByCountryChange}
          >
            <option key={0} value="" className="bg-secondary text-light">
              Filter list by country...
            </option>
            {countrySelectOptions}
          </Form.Select>
        </Container>
        <Container fluid className="px-0">
          <Form.Select
            aria-label="Filter list by industry"
            onChange={handleFilterByIndustryChange}
          >
            <option key={0} value="" className="bg-secondary text-light">
              Filter list by industry...
            </option>
            {industrySelectOptions}
          </Form.Select>
        </Container>
        <Container fluid className="px-0">
          <Form.Select aria-label="Sort list by" onChange={handleSortByChange}>
            <option value="" className="bg-secondary text-light">
              Sort list by...
            </option>
            <option value="name-asc">Name, A to Z</option>
            <option value="name-desc">Name, Z to A</option>
            <option value="employees-asc">
              Number of Employees, Smallest to Largest
            </option>
            <option value="employees-desc">
              Number of Employees, Largest to Smallest
            </option>
          </Form.Select>
        </Container>
      </Stack>
    </>
  );
}

export default ListOptions;
