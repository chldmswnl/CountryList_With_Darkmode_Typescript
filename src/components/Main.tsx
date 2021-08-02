import React from "react";
import SearchSection from "./SearchSection";
import styled from "styled-components";
import CountrySection from "./CountrySection";

const WrappedMain = styled.div`
  width: 90vw;
  margin-top: 20px;
`;

const Main = () => {
  return (
    <WrappedMain>
      <SearchSection />
      <CountrySection />
    </WrappedMain>
  );
};

export default Main;
