// App.jsx
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
import TelechargePage from "./components/Templates/TelechargePage";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageAccueil />} />
            <Route
              path="/telecharge/:templateId"
              element={<TelechargePage />}
            />
            <Route path="/template1" element={<RenduNewTemplate />} />
            <Route path="/template2" element={<PageTemplate1 />} />
            <Route path="/template3" element={<PageTemplate3 />} />
            <Route path="/template4" element={<EnsembleTemp2 />} />
            <Route path="/template5" element={<Aria />} />
            <Route path="/template6" element={<Ampire />} />
            <Route path="/template7" element={<PageTemplate2 />} />
            <Route path="/template8" element={<Alt />} />
            <Route path="/template9" element={<PageTemplate4 />} />
            <Route path="/template10" element={<PageTemplate4 />} />
            <Route path="/template11" element={<PageTemplate4 />} />
            <Route path="/templatesPage" element={<TotalTemplates />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
