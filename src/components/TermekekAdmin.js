import React, { useContext } from "react";
import TermekAdmin from "./TermekAdmin";
import { ApiContext } from "../context/ApiContext";

function TermekekAdmin() {
  const { termekLista } = useContext(ApiContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">price</th>
          <th scope="col">description</th>
          <th scope="col">category</th>
          <th scope="col">Módosítás</th>
          <th scope="col">Törlés</th>
        </tr>
      </thead>
      <tbody>
        {termekLista.map((termek) => {
          return (
            <TermekAdmin termek={termek} lista={termekLista} key={termek.id} />
          );
        })}
      </tbody>
    </table>
  );
}

export default TermekekAdmin;
