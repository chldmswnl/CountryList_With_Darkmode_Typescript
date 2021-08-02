import React from "react";
import { countryType } from "../types";

type CountryProps = {
  countryInfo: countryType;
};

function Country({
  countryInfo: {
    img,
    name,
    population,
    capital,
    region,
    currency,
    language,
    borderCountries,
  },
}: CountryProps) {
  return <div></div>;
}

export default Country;
