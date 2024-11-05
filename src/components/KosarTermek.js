import ListGroup from "react-bootstrap/ListGroup";

function KosarTermek({ elem }) {
  return (
    <>
      {["sm", "md", "lg", "xl", "xxl"].map((breakpoint) => (
        <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
          <ListGroup.Item>
            <img src={elem.image} alt="" />
          </ListGroup.Item>
          <ListGroup.Item>{elem.title}</ListGroup.Item>
          <ListGroup.Item>${elem.price}</ListGroup.Item>
          <ListGroup.Item>🗑️</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default KosarTermek;
