import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";


const Frase = (props) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={4}>
            <Image src={props.personaje.image} className="w-100" alt={props.personaje.character}></Image>
          </Col>
          <Col md={8}>
            <Card.Title>{props.personaje.character}</Card.Title>
            <Card.Text>
        { props.personaje.quote}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Frase;
