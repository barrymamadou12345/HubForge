
import React, { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");

  const [user, setUser] = useState(null);// au besoin !!

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  //  Autres fonctions pour d'autres propriétés
  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
