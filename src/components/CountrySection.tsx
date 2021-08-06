import React, { useEffect } from "react";
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
  const [countryList, setCountryList] = useState<countryType[]>([]);
  const keyword: string = useSelector((state: RootState) => state.keyword);
  const countryName: string = useSelector(
    (state: RootState) => state.countryName
  );

  const makeNewList = (obj: { value: string; keyValue: string }) => {
    const { value, keyValue } = obj;
    let newData: countryType[] = [];
    if (value) {
      newData =
        keyValue === "region"
          ? data.filter((data) => data.region === value)
          : data.filter((data) => data.name === value);
      setCountryList(newData);
    } else {
      setCountryList(data);
    }
  };

  useEffect(() => {
    setCountryList(data);
  }, [data]);

  useEffect(() => {
    makeNewList({ value: keyword, keyValue: "region" });
  }, [keyword]);

  useEffect(() => {
    makeNewList({ value: countryName, keyValue: "countryName" });
  }, [countryName]);

  return (
    <CountryDiv>
      {countryList.map((country) => (
        <Country key={country.name} countryInfo={country} />
      ))}
    </CountryDiv>
  );
}

export default CountrySection;
