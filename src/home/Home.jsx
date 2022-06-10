import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import ErrorAlert from "../utils/ErrorAlert";
import DisplayList from "./DisplayList";
import ListOptions from "../listOptions/ListOptions";
import { loadList } from "../utils/api";

function Home({
  employerList,
  setEmployerList,
  showingList,
  setShowingList,
  sortListBy,
  setSortListBy,
  filterListByCountry,
  setFilterListByCountry,
  filterListByIndustry,
  setFilterListByIndustry,
  countryFilterOptions,
  setCountryFilterOptions,
  industryFilterOptions,
  setIndustryFilterOptions,
  countryFilterMap,
  setCountryFilterMap,
  industryFilterMap,
  setIndustryFilterMap,
  appErr,
  setAppErr,
}) {
  const navigate = useNavigate();
  

  async function getList() {
    const abortController = new AbortController();
    setAppErr(null);
    try {
      //Pull data from API
      const response = await loadList(abortController.signal);
      //Store API data as returned
      setEmployerList(response);

      //Pull list of filter options from API data and store in array
      const currentListCountries = response.map((emp) => emp.country);
      const currentListIndustries = response.map((emp) => emp.industry);
      //Create sets from filter options array to auto drop duplicates
      const listCountriesSet = new Set(currentListCountries);
      const listIndustriesSet = new Set(currentListIndustries);
      //Create arrays from de-duplicated filter lists and sort alphabetically for <option> display order
      const countriesFilterArr = Array.from(listCountriesSet);
      countriesFilterArr.sort();
      const industriesFilterArr = Array.from(listIndustriesSet);
      industriesFilterArr.sort();
      //Set filter options variables with de-duplicated, ordered list arrays
      setCountryFilterOptions(countriesFilterArr);
      setIndustryFilterOptions(industriesFilterArr);
    } catch (error) {
      setAppErr(error);
    }

    return () => abortController.abort();
  }

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    /**
     * Populate Maps for filterByCountry and filterByIndustry with each filter option as
     *      key = [employerList => employer[key] = key]
     * Maps store API data by option for filtering speed and multiple-filter application clarity advantage
     *      vs small data savings of filtering whole list in place at every application
     * */
    setCountryFilterMap(new Map());
    const mapCountriesInList = new Map();

    countryFilterOptions.forEach((opt) => {
      const optEmployerList = employerList.filter(
        (empl) => empl.country === opt
      );
      mapCountriesInList.set(opt, optEmployerList);
    });
    setCountryFilterMap(new Map([...mapCountriesInList]));

    setIndustryFilterMap(new Map());
    const mapIndustriesInList = new Map();

    industryFilterOptions.forEach((opt) => {
      const optEmployerList = employerList.filter(
        (empl) => empl.industry === opt
      );
      mapIndustriesInList.set(opt, optEmployerList);
    });
    setIndustryFilterMap(new Map([...mapIndustriesInList]));
  }, [employerList]);

  //𝗦𝗲𝘁 𝘀𝗵𝗼𝘄𝗶𝗻𝗴𝗟𝗶𝘀𝘁 𝗯𝘆 𝘀𝗲𝗹𝗲𝗰𝘁𝗲𝗱 𝗳𝗶𝗹𝘁𝗲𝗿𝘀(𝘀)
  useEffect(() => {
    setAppErr(null);
    if (filterListByCountry && !filterListByIndustry) {
      const employersWithSelectedCountry =
        countryFilterMap.get(filterListByCountry);
      setShowingList(employersWithSelectedCountry);
    } else if (!filterListByCountry && filterListByIndustry) {
      const employersWithSelectedIndustry =
        industryFilterMap.get(filterListByIndustry);
      setShowingList(employersWithSelectedIndustry);
    } else if (!filterListByCountry && !filterListByIndustry) {
      setShowingList([]);
    } else {
      // ⁡⁣⁢⁣These should be arrays. Even if with only one object. None should be empty.⁡

      const employersWithSelectedCountry =
        countryFilterMap.get(filterListByCountry);
      const employersWithSelectedIndustry =
        industryFilterMap.get(filterListByIndustry);

      // ⁡⁣⁢⁣Create map from arrays of one side selected data to enable quick search on employer.id in compare⁡
      const mapEmplrsWthIndustry = new Map();
      employersWithSelectedIndustry.forEach((empl) => {
        mapEmplrsWthIndustry.set(empl.id, empl);
      });

      // ⁡⁣⁢⁣Create Set to hold values with both selected filters + compare values of filter1 and filter2⁡ ⁡
      //    ⁡⁣⁢⁣using employer.id from array([filter1]) as comparator in Map(filter2) lookup⁡⁡
      const employersWithBoth = new Set();
      employersWithSelectedCountry.forEach((empl) => {
        if (mapEmplrsWthIndustry.has(empl.id)) {
          employersWithBoth.add(empl);
        }
      });
      // ⁡⁣⁢⁣Set showingList to array from Set⁡ ⁡
      if (!employersWithBoth.size) {
        setAppErr(
          new Error(
            `No results match 'country': ${filterListByCountry} AND 'industry': ${filterListByIndustry}`
          )
        );
      }
      setShowingList([...employersWithBoth]);
    }
  }, [filterListByCountry, filterListByIndustry]);

  return (
    <>
      <Row id="home-error-row" className="w-100 align-content-center ps-5 pe-3">
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
          className="flex-fill justify-content-around"
        >
          <Col
            id="home-options-col"
            className="align-items-center"
            xs={12}
            lg={4}
          >
            <Row id="home-options-row" className="pt-3 px-3 px-lg-0">
              <ListOptions
                setSortListBy={setSortListBy}
                setFilterListByCountry={setFilterListByCountry}
                setFilterListByIndustry={setFilterListByIndustry}
                countryFilterOptions={countryFilterOptions}
                industryFilterOptions={industryFilterOptions}
                appErr={appErr}
                setAppErr={setAppErr}
              />
            </Row>
          </Col>
          <Col
            id="home-content-col"
            className="align-items-center px-0"
            xs={12}
            lg={8}
            xxl={7}
          >
            <Row id="home-content-row" className="h-100">
              <Container fluid className="my-lg-2">
                <DisplayList
                  employerList={employerList}
                  setEmployerList={setEmployerList}
                  showingList={showingList}
                  setShowingList={setShowingList}
                  sortListBy={sortListBy}
                  filterListByCountry={filterListByCountry}
                  filterListByIndustry={filterListByIndustry}
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
