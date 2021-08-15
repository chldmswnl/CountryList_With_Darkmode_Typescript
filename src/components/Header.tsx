import React, { useState } from "react";
import Switch from "react-switch";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setColorTheme } from "../redux/colorThemeSlice";
import { textColor } from "../theme";

const Title = styled.span`
  color: ${textColor};
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;
const SwitchBtn = styled(Switch)`
  margin-right: 1.5rem;
`;
const WrappedHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1.5px solid #cccccc;
`;
function Header() {
  const dispatch = useDispatch();
  const [lightMode, setLightMode] = useState(false);
  const handleChange = (e: boolean) => {
    setLightMode(e);
    const theme = lightMode ? "light" : "dark";
    dispatch(setColorTheme(theme));
  };

  return (
    <WrappedHeader>
      <Title>Where in the world?</Title>
      <SwitchBtn
        onChange={handleChange}
        checked={lightMode}
        onColor="#090a0a"
        offColor="#6aa0fc"
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </WrappedHeader>
  );
}

export default Header;
