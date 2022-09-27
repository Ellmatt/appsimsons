import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import imagenLogo from "./img/image.png";
import imagenHomero from "./img/logo192.png";
import "./Estilo.css";

function App() {
  // aqui va la logica

  return (
    <section className="cbody py-4 text-center">
      <Card
        border="warning"
        style={{ width: "100%"}}
        className="cbody container py-5 px-5"
      >
        <div>
          <Card.Img src={imagenLogo} className="w-50"></Card.Img>
        </div>
        <div>
          <Button className="bg-warning text-dark my-5"> Obtener Frase </Button>
        </div>
        <Card border="danger">
          <Card.Body className="row cdiv">
            <div className="col-lg-4">
              <Card.Img src={imagenHomero} className="w-75"></Card.Img>
            </div>
            <div className="col-lg-8">
              <h2>Homer Simpson</h2>
              <p>
                Facts are meaningless. You could use facts to prove anithing
                that's even remotely true.
              </p>
            </div>
          </Card.Body>
        </Card>
      </Card>
    </section>
  );
}

export default App;
