import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styled from "styled-components";
import "./App.css";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import { MyRoutes } from "./routers/routes";
function App() {
  return (
    <AuthContextProvider>
      <Container>
        <MyRoutes />
      </Container>
    </AuthContextProvider>
  );
}
const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
`;
export default App;
