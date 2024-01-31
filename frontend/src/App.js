
import React from 'react';
import './App.css';
import { PageTemplate } from './components/PageTemplate';
import { PageAccueil } from './components/composPageAccueil/PageAccueil';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnsembleTemp2 from './components/TemplateNum2/EnsembleTemp2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<PageAccueil />} />
          <Route path="/accueil" element={<PageAccueil />} />
          <Route path="/template1" element={<EnsembleTemp2 />} />
          <Route path="/template2" element={<PageTemplate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
