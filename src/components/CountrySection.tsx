import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Country from "./Country";
import { countryType } from "../types";
import styled from "styled-components";
import { useState } from "react";

const CountryDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-left: 3rem;
`;

function CountrySection() {
  const data: countryType[] = useSelector(
    (state: RootState) => state.countryList
  );
  const [countryList, setCountryList] = useState(data);
  const keyword: string = useSelector((state: RootState) => state.keyword);

  console.log(countryList);
  console.log(keyword);

  return (
    <CountryDiv>
      {countryList.map((country) => (
        <Country key={country.name} countryInfo={country} />
      ))}
    </CountryDiv>
  );
}

export default CountrySection;
