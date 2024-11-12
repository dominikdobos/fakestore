import React, { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";

function Urlap() {
  const { postAdat, kategoriaLista } = useContext(ApiContext);

  // az űrlaphoz tartozik egy saját state, itt tároljuk az űrlap adatait
  const [adat, setAdat] = useState({
    title: "Ez a termék neve",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  function elkuld(event) {
    event.preventDefault();
    // összegyüjtjük az adatokat és összeállítunk egy objektumot -> elküldjük POST kéréssel a végpontra
    console.log("elküld", adat);
    // itt kellene validálni, és cksa akkor elküldeni ha formailag helyes
    postAdat("/products", adat);
  }

  function valtoztatasKezeles(event) {
    //az inputba beírt adatokkal kell frissíteni az objektumot
    const segedObj = { ...adat };
    segedObj[event.target.id] = event.target.value;
    setAdat({ ...segedObj });
  }

  return (
    <div>
      <form onSubmit={elkuld}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            A termék neve
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
            value={adat.title}
            onChange={valtoztatasKezeles}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            A termék ára
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            aria-describedby="priceHelp"
            min="1000"
            max="100000"
            value={adat.price}
            onChange={valtoztatasKezeles}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            A termék leírása
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={adat.description}
            onChange={valtoztatasKezeles}
          ></textarea>
        </div>

        <select className="form-select" aria-label="Default select example">
          <option selected>Kategóriák</option>
          {kategoriaLista.map((kategoria) => {
            return <option value={kategoria}>{kategoria}</option>;
          })}
        </select>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Urlap;
