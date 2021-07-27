import React from "react";
import SearchSection from "./SearchSection";
import styled from "styled-components";

const WrappedMain = styled.div`
  width: 90vw;
  margin-top: 20px;
`;

const Main = () => {
  return (
    <WrappedMain>
      <SearchSection />
    </WrappedMain>
  );
};

export default Main;
