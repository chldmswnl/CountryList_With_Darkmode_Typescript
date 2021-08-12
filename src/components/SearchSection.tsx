import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { setKeyword } from "../redux/keywordSlice";
import { setCountryName } from "../redux/countryNameSlice";
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
  const dispatch = useDispatch();

  const handleChange = (e: { value: string; label: string }) => {
    dispatch(setKeyword(e.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      dispatch(setCountryName(e.target.value));
    }, 1000);
  };

  const options = [
    { value: "", label: "None" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
  ];
  return (
    <WrappedSearchSection>
      <SearchBar
        type="text"
        placeholder="Search for country by its name"
        onChange={handleInputChange}
      />
      <SelectRegion
        onChange={handleChange}
        options={options}
        isSearchable={false}
        placeholder="Filter by Region"
      />
    </WrappedSearchSection>
  );
}

export default SearchSection;
