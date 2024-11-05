import { createContext, useState } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
  const [kosarLista, setKosarLista] = useState([]);

  function kosarba(termek) {
    setKosarLista((elozoLista) => {
      const ujLista = [...elozoLista];
      ujLista.push(termek);
      return ujLista;
    });
  }

  return (
    <KosarContext.Provider value={{ kosarLista, kosarba }}>
      {children}
    </KosarContext.Provider>
  );
};
