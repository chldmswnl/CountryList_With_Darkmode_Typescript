import React from "react";
import { useParams } from "react-router-dom";
import { countryType } from "Mymodule";
import { useEffect } from "react";
import getCountryInfo from "../api/getCountry";
import { useState } from "react";

const CountryInfo = () => {
  const path: { code: string } = useParams();
  const [country, setCountry] = useState({});
  //const {name,population,region,capital,currencies,languages,borders}=country;
  const fetchCountryInfo = async (path: { code: string }) => {
    const { data } = await getCountryInfo(path.code);
    setCountry(data);
  };

  useEffect(() => {
    fetchCountryInfo(path);
  }, []);
  return (
    <div>
      <button>Back</button>
      <div>
        <img alt="flag" />
        <div>
          <span></span>
          <div>
            <span>
              <b></b>
            </span>
            <span></span>
            <span></span>
          </div>

          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <span>Border Countries: </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
