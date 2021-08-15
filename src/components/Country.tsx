import React from "react";
import { countryType } from "Mymodule";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { textColor, infoColor } from "../theme";

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
  width: 15rem;
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
  color: ${textColor};
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;
const CountryInfo = styled.span`
  font-size: 0.9rem;
  color: ${infoColor};
`;

type CountryProps = {
  countryInfo: countryType;
};

function Country({
  countryInfo: {
    flag,
    name,
    population,
    capital,
    region,
    languages,
    numericCode,
    alpha2Code,
  },
}: CountryProps) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/${name}`);
  };

  return (
    <CountryCard onClick={handleClick}>
      <FlagImg alt="flag" src={flag} />
      <CountryInfoDiv>
        <CountryName>{name}</CountryName>
        <CountryInfo>
          Population:{" "}
          {population?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </CountryInfo>
        <CountryInfo>Region: {region}</CountryInfo>
        <CountryInfo>Capital: {capital}</CountryInfo>
      </CountryInfoDiv>
    </CountryCard>
  );
}

export default Country;
