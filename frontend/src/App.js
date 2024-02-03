import React from "react";
import "./App.css";
import {PageTemplate2 } from "./components/PageTemplate";
import Alt from "./components/TemplateNum1/Alt";
import { PageAccueil } from "./components/composPageAccueil/PageAccueil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnsembleTemp2 from "./components/TemplateNum2/EnsembleTemp2";
import { AppProvider } from "./context/AppContext";
import Ampire from "./components/TemplateNum3/Ampire";
import Aria from "./components/TemplateNum4/Aria";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<PageAccueil />} />
            <Route path="/accueil" element={<PageAccueil />} />
            <Route path="/template1" element={<Alt />} />
            <Route path="/template2" element={<EnsembleTemp2 />} />
            <Route path="/template3" element={<Ampire />} />
            <Route path="/template4" element={<Aria />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
