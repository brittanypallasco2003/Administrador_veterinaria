import React, { createContext, useState } from "react";
export const CitasContext = createContext();

const CitasProvider = ({ children }) => {
  const [listadoPacientes, setlistadoPacientes] = useState([]);
  const [mostrarAlerta, setmostrarAlerta] = useState(false);
  return (
    <CitasContext.Provider
      value={{
        listadoPacientes,
        setlistadoPacientes,
        mostrarAlerta,
        setmostrarAlerta,
      }}
    >
      {children}
    </CitasContext.Provider>
  );
};

export default CitasProvider;
