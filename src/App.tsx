import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor } from "./theme";
import { Route } from "react-router-dom";
import CountryInfo from "./components/CountryInfo";
import Header from "./components/Header";
import Content from "./components/Content";
import { useSelector } from "react-redux";
import { RootState } from "./redux";

const WrappedApp = styled.div`
  background-color: ${backgroundColor};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const colorTheme: string = useSelector(
    (state: RootState) => state.colorTheme
  );

  return (
    <ThemeProvider theme={{ theme: colorTheme }}>
      <WrappedApp>
        <Header />
        <Route exact path="/" component={Content} />
        <Route path="/:name" component={CountryInfo} />
      </WrappedApp>
    </ThemeProvider>
  );
}

export default App;
