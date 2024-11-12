import React from "react";
import { useContext } from "react";
import Kosar from "../components/Kosar";
import Vasarloter from "../components/Vasarloter";
import { ApiContext } from "../context/ApiContext";
import { KosarContext } from "../context/KosarContext";

function Public() {
  const { termekLista } = useContext(ApiContext);
  const { kosarLista } = useContext(KosarContext);
  return (
    <main className="row">
      <article className="col-lg-8">
        <h4>Vásárlótér</h4>
        <Vasarloter termekLista={termekLista} />
      </article>
      <aside className="col-lg-4">
        <h4>Kosár</h4>
        <Kosar kosarLista={kosarLista} />
      </aside>
    </main>
  );
}

export default Public;
