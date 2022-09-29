import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import imagenHomero from "../img/logo192.png";

const Frase = () => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={4}>
            <Image src={imagenHomero} className="w-100"></Image>
          </Col>
          <Col md={8}>
            <Card.Title>Homer Simpson</Card.Title>
            <Card.Text>
              Facts are meaningless. You could use facts to prove anithing
              that's even remotely true.
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Frase;
