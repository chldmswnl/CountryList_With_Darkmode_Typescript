import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import getCountryInfo from "../api/getCountry";
import { useSelector } from "react-redux";
import { useState } from "react";
import { countryType } from "Mymodule";
import { RootState } from "../redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { backgroundColor, textColor, infoColor, screenSize } from "../theme";

const BackBtn = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #adadad;
  background-color: ${backgroundColor};
  border-radius: 10px;
  font-weight: bold;
  margin: 20px 0;
  color: ${textColor};

  &:hover {
    background-color: #adadad;
    color: white;
  }
  @media ${screenSize.mobile} {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledFlag = styled.img`
  width: 450px;
  height: 300px;
  margin-right: 100px;
  border: 1px solid #d9d9d9;
  @media ${screenSize.mobile} {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

const WrappedInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  @media ${screenSize.mobile} {
    flex-direction: column;
    align-items: start;
    margin-bottom: 50px;
  }
`;
const WrappedInfowBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80vw;
  height: 100vh;
`;

const StyledName = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${textColor};
`;

const StyledCoulmn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

const BorderBtn = styled.button`
  width: 100px;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border: 1px solid #adadad;
  color: #525252;
  &:hover {
    background-color: #adadad;
    color: white;
  }
`;

const StyledSpan = styled.span`
  color: ${textColor};
`;

const StyledInfoSpan = styled.span`
  color: ${infoColor};
`;

const CountryInfo = () => {
  const path: { name: string } = useParams();
  const history = useHistory();
  const [country, setCountry] = useState<countryType>();
  const [borderCountries, setBorderCountries] = useState<
    { name: string; code: string }[]
  >([]);
  const countryList: countryType[] = useSelector(
    (state: RootState) => state.countryList
  );
  const fetchCountryInfo = async (path: { name: string }) => {
    const { data } = await getCountryInfo(path.name);
    setCountry(data);
  };

  const {
    name,
    population,
    region,
    capital,
    currencies,
    languages,
    borders,
    alpha3Code,
    flag,
  } = (country as countryType) || {};

  useEffect(() => {
    const temp: { name: string; code: string }[] = [];
    country?.borders.map((border) => {
      countryList?.map((country) => {
        if (country.alpha3Code === border) {
          temp.push({ name: country.name, code: country.alpha2Code });
        }
      });
    });
    setBorderCountries(temp);
  }, [country]);

  useEffect(() => {
    fetchCountryInfo(path);
  }, []);

  useEffect(() => {
    fetchCountryInfo(path);
  }, [path]);

  return (
    <WrappedInfowBtn>
      <BackBtn onClick={() => history.goBack()}>Back</BackBtn>
      <div>
        <WrappedInfo>
          <StyledFlag alt="flag" src={flag} />
          <div>
            <StyledName>{name}</StyledName>
            <StyledCoulmn>
              <StyledSpan>
                <b>Population: </b>
                <StyledInfoSpan>
                  {population?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </StyledInfoSpan>
              </StyledSpan>
              <StyledSpan>
                <b>Region: </b>
                <StyledInfoSpan>{region}</StyledInfoSpan>
              </StyledSpan>
              <StyledSpan>
                <b>Capital: </b>
                <StyledInfoSpan>{capital}</StyledInfoSpan>
              </StyledSpan>
              <StyledSpan>
                <b>Currencies: </b>
                {currencies?.map((currency) => (
                  <StyledInfoSpan>{currency.symbol}</StyledInfoSpan>
                ))}
              </StyledSpan>
              <StyledSpan>
                <b>Languages: </b>
                {languages?.map((language) => (
                  <StyledInfoSpan>{language.name} </StyledInfoSpan>
                ))}
              </StyledSpan>
            </StyledCoulmn>
            <div>
              <StyledSpan>
                <b>Border Countries: </b>
              </StyledSpan>

              {borderCountries?.map((border) => (
                <BorderBtn
                  id={border.code}
                  onClick={() => history.push(`/${border.name}`)}
                >
                  <span>
                    {border.name.indexOf("(") === -1
                      ? border.name
                      : border.name.substring(0, border.name.indexOf("("))}
                  </span>
                </BorderBtn>
              ))}
            </div>
          </div>
        </WrappedInfo>
      </div>
    </WrappedInfowBtn>
  );
};

export default CountryInfo;
