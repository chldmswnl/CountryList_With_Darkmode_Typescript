import React from "react";
import SearchSection from "./SearchSection";
import styled from "styled-components";
import CountrySection from "./CountrySection";
import { useDispatch } from "react-redux";
import { setCountryList } from "../redux/listSlice";
import getCountryList from "../api/getCountryList";
import { useEffect } from "react";
import { screenSize } from "../theme";

const WrappedMain = styled.div`
  width: 90vw;
  margin-top: 20px;
  @media ${screenSize.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Content = () => {
  const dispatch = useDispatch();
  const fetchList = async () => {
    const { data } = await getCountryList();
    dispatch(setCountryList(data));
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <WrappedMain>
      <SearchSection />
      <CountrySection />
    </WrappedMain>
  );
};

export default Content;
