import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

import "./Estilo.css";

function App() {
  // aqui va la logica

  return (
    <Card className="text-center mx-3 my-3">
       <Card border="warning" style={{ width: '100%' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Warning Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Card>
  );
}

export default App;
