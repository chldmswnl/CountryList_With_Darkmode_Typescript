import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Country from "./Country";
import { countryType } from "Mymodule";
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
  const [countryList, setCountryList] = useState<countryType[]>(data);
  const keyword: string = useSelector((state: RootState) => state.keyword);
  const countryName: string = useSelector(
    (state: RootState) => state.countryName
  );

  const makeNewList = (obj: { key: string; value: string }) => {
    let newData: countryType[] = [];
    const { key, value } = obj;
    switch (key) {
      case "region":
        value
          ? (newData = data.filter((data) => data.region === value))
          : (newData = data);

        break;
      case "name":
        newData = data.filter((data) =>
          data.name.toLowerCase().includes(value.toLowerCase())
        );
        break;
    }
    setCountryList(newData);
  };

  useEffect(() => {
    setCountryList(data);
  }, [data]);

  useEffect(() => {
    makeNewList({ value: keyword, key: "region" });
    console.log(keyword);
  }, [keyword]);

  useEffect(() => {
    makeNewList({ value: countryName, key: "name" });
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
