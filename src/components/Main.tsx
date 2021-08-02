import React from "react";
import SearchSection from "./SearchSection";
import styled from "styled-components";
import CountrySection from "./CountrySection";
import { useDispatch } from "react-redux";
import { setCountryList } from "../redux/listSlice";
import getJobList from "../api/getCountryList";
import { useEffect } from "react";

const WrappedMain = styled.div`
  width: 90vw;
  margin-top: 20px;
`;

const Main = () => {
  const dispatch = useDispatch();
  const fetchList = async () => {
    const { data } = await getJobList();
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

export default Main;
