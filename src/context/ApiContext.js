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
  const [kategoriaLista, setKategoriaLista] = useState([]);

  const getAdat = async (vegpont, callbackfv) => {
    // saját axios példányt használjuk
    try {
      const response = await myAxios.get(vegpont); //az alapértelmezett baseURL-ben megadott végpontot kiegészítjük a /products-szal
      callbackfv(response.data); //beállítjuk az apiData statet a beállítófüggvényével.
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor.");
    } finally {
    }
  };

  const postAdat = async (vegpont, adat) => {
    // saját axios példányt használjuk
    try {
      const response = await myAxios.post(vegpont, adat); //az alapértelmezett baseURL-ben megadott végpontot kiegészítjük a /products-szal
      console.log(response);
    } catch (err) {
      console.log("Hiba történt az adatok küldésekor.");
    } finally {
    }
  };

  const deleteAdat = async (vegpont) => {
    // saját axios példányt használjuk
    try {
      const response = await myAxios.delete(vegpont); //az alapértelmezett baseURL-ben megadott végpontot kiegészítjük a /products-szal
      console.log(response);
    } catch (err) {
      console.log("Hiba történt az adatok küldésekor.");
    } finally {
    }
  };

  function termekTorles(id) {
    setTermekLista(termekLista.filter((listaTargy) => id !== listaTargy.id));
    deleteAdat(`/products/${id}`);
  }

  // aszinkron hívások kezelése useEffect hook
  useEffect(() => {
    getAdat("/products", setTermekLista);
    getAdat("/products/categories", setKategoriaLista);
  }, []);

  return (
    <ApiContext.Provider
      value={{ termekLista, postAdat, kategoriaLista, termekTorles }}
    >
      {children}
    </ApiContext.Provider>
  );
};
