import React, { createContext, useState } from "react";
export const CitasContext = createContext();

const CitasProvider = ({ children }) => {
  const [listadoPacientes, setlistadoPacientes] = useState([]);
  return (
    <CitasContext.Provider value={{ listadoPacientes, setlistadoPacientes }}>
      {children}
    </CitasContext.Provider>
  );
};

export default CitasProvider;
