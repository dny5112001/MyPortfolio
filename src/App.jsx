import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route name="Home" Component={HomePage} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
