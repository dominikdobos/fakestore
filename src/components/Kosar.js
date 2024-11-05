import KosarTermek from "./KosarTermek";

function Kosar({ kosarLista }) {
  return (
    <div>
      {kosarLista.map((elem) => {
        <KosarTermek key={elem.id} elem={elem} />;
      })}
    </div>
  );
}

export default Kosar;
