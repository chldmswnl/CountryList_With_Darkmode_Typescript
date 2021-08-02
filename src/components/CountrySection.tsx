import React from "react";
import getJobList from "../api/getCountryList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Country from "./Country";
import { countryType } from "../types";

function CountrySection() {
  const countryList: countryType[] = useSelector(
    (state: RootState) => state.countryList
  );
  return (
    <>
      {countryList.map((country) => (
        <Country countryInfo={country} />
      ))}
    </>
  );
}

export default CountrySection;
