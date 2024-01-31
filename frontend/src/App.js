
import React from 'react';
import './App.css';
import { PageTemplate } from './components/PageTemplate';
import { PageAccueil } from './components/composPageAccueil/PageAccueil';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<PageAccueil />} />
          <Route path="/accueil" element={<PageAccueil />} />
          <Route path="/templates" element={<PageTemplate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
