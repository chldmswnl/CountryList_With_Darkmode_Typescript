import React, { useState } from "react";
import Switch from "react-switch";
import styled from "styled-components";

const Title = styled.span`
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
  const [lightMode, setLightMode] = useState(true);
  const handleChange = (e: boolean) => {
    setLightMode(e);
  };
  return (
    <WrappedHeader>
      <Title>Where in the world?</Title>
      <SwitchBtn
        onChange={handleChange}
        checked={lightMode}
        onColor="#6aa0fc"
        offColor="#090a0a"
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </WrappedHeader>
  );
}

export default Header;
