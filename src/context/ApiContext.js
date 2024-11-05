/*
1. createContext
2. provider
3. Provider és a Context összekötése
4. Körbeölelgetés
5. Felhasználás a komponensekben
*/

import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);

  const getAdat = async (vegpont) => {
    // saját axios példányt használjuk
    try {
      const response = await myAxios.get(vegpont); //az alapértelmezett baseURL-ben megadott végpontot kiegészítjük a /products-szal
      setTermekLista(response.data); //beállítjuk az apiData statet a beállítófüggvényével.
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor.");
    } finally {
    }
  };

  // aszinkron hívások kezelése useEffect hook
  useEffect(() => {
    getAdat("/products");
  }, []);

  return (
    <ApiContext.Provider value={{ termekLista }}>
      {children}
    </ApiContext.Provider>
  );
};
