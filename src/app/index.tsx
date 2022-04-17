import React from "react";
import Header from "components/header";
import Navigation from "components/navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tab1 from "pages/tab-1";
import Tab2 from "pages/tab-2";
import { AppWrapper } from "./style";

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
