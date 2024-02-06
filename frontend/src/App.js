import React from "react";
import "./App.css";
import {
  PageTemplate1,
  PageTemplate2,
  PageTemplate3,
  PageTemplate4,
} from "./components/PageTemplate";
import Alt from "./components/TemplateNum1/Alt";
import { PageAccueil } from "./components/composPageAccueil/PageAccueil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnsembleTemp2 from "./components/TemplateNum2/EnsembleTemp2";
import { AppProvider } from "./context/AppContext";
import Ampire from "./components/TemplateNum3/Ampire";
import Aria from "./components/TemplateNum4/Aria";
import { RenduNewTemplate } from "./components/NewTemplate/RenduNewTemplate";
import { TotalTemplates } from "./components/Templates/TotalTemplates";

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
            <Route path="/templatesPage" element={<TotalTemplates />} />
            <Route path="/template3" element={<Ampire />} />
            <Route path="/template4" element={<Aria />} />
            <Route path="/template5" element={<PageTemplate1 />} />
            <Route path="/template6" element={<PageTemplate2 />} />
            <Route path="/template7" element={<PageTemplate3 />} />
            <Route path="/template8" element={<PageTemplate4 />} />
            <Route path="/template9" element={<RenduNewTemplate />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
