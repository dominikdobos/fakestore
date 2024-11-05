import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { KosarContext } from "../context/KosarContext";

function Termek({ termek }) {
  const { kosarba } = useContext(KosarContext);

  return (
    <Card style={{ width: "16rem" }} className="col-lg-2 ">
      <Card.Img variant="top" src={termek.image} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{termek.title}</Card.Title>
          <Card.Text>{termek.description}</Card.Text>
        </div>
        <div className="pt-4">
          <Card.Text>${termek.price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              kosarba(termek);
            }}
          >
            Kosárba!
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Termek;
