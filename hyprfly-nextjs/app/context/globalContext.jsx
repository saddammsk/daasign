'use client'
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [Mode, setMode] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        Mode,
        setMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
