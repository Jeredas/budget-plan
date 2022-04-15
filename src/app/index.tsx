import React from "react";
import Header from "components/header";
import Navigation from "components/navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tab1 from "pages/tab-1";
import styled from "styled-components";
import Tab2 from "pages/tab-2";

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Tab1 />}></Route>
          <Route path="/tab1" element={<Tab1 />}></Route>
          <Route path="/tab2" element={<Tab2 />}></Route>
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;

const AppWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;
