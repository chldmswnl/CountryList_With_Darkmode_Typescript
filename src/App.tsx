import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Main from "./components/Main";

const WrappedApp = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <WrappedApp className="App">
      <Header />
      <Main />
    </WrappedApp>
  );
}

export default App;
