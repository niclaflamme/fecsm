import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Authenticated } from "./pages/Authenticated";
import { Login } from "./pages/Login";
import { SelectOrganization } from "./pages/SelectOrganization";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authenticated />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select-org" element={<SelectOrganization />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
