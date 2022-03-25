import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import styled from "styled-components";
import Login from "./routes/Login";
import { mediaQuery, MediaQueryWidth } from "./utils";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  max-width: 700px;
  ${mediaQuery(MediaQueryWidth.sm, `
  max-width:400px`)}
`;

function App() {
  return (
    <AppContainer>
      <BoxContainer>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BoxContainer>
    </AppContainer>

  );
}

export default App;
