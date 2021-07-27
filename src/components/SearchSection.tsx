import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WrappedSearchSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectRegion = styled(Select)`
  width: 200px;
`;

const SearchBar = styled(Input)`
  width: 400px;
`;

function SearchSection() {
  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
  ];
  return (
    <WrappedSearchSection>
      <SearchBar type="text" placeholder="Search for a country..." />
      <SelectRegion
        options={options}
        isSearchable={false}
        placeholder="Filter by Region"
      />
    </WrappedSearchSection>
  );
}

export default SearchSection;
