import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import styled from "styled-components";
import Login from "./routes/Login";
import { AccountBox } from "./components /accountBox";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <div className="App">
      <AppContainer>
        <AccountBox />
      </AppContainer>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
