import "./App.css";
import styled from "styled-components";
import { Route } from "react-router-dom";
import CountryInfo from "./components/CountryInfo";
import Header from "./components/Header";
import Content from "./components/Content";

const WrappedApp = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <WrappedApp>
      <Header />
      <Route exact path="/" component={Content} />
      <Route path="/:code" component={CountryInfo} />
    </WrappedApp>
  );
}

export default App;
