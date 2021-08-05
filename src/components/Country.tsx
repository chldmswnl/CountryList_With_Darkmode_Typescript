import React from "react";
import { countryType } from "../types";
import styled from "styled-components";

const CountryCard = styled.div`
  width: 15rem;
  height: 19rem;
  margin-right: 4rem;
  margin-bottom: 3rem;
  border: 1px solid #dedede;
  cursor: pointer;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

const FlagImg = styled.img`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #dedede;
`;

const CountryInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

const CountryName = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;
const CountryInfo = styled.span`
  font-size: 0.9rem;
  color: #4a4a4a;
`;

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
  return (
    <CountryCard>
      <FlagImg alt="flag" src={img} />
      <CountryInfoDiv>
        <CountryName>{name}</CountryName>
        <CountryInfo>Population: {population}</CountryInfo>
        <CountryInfo>Region: {region}</CountryInfo>
        <CountryInfo>Capital: {capital}</CountryInfo>
      </CountryInfoDiv>
    </CountryCard>
  );
}

export default Country;
