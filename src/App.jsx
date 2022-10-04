import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import imagenLogo from "./img/image.png";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";
import "./Estilo.css";
import Spiner from "./components/Spiner";

function App() {
  // aqui va la logica

  const [personaje, setPersonaje] = useState({});
  const [mostrarSpiner, setMostrarSpiner] = useState(true);

  useEffect(() => {
    // siempre pedir api en montaje cuando se la solicite, no en montaje y actualizacion
    consultarApi();
  }, []);

  const consultarApi = async () => {
    //  try cach es para poner codigo en est mas controlada por si hay problemas
    try {
      setMostrarSpiner(true);
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      // json en minuscula es un metodo
      const dato = await respuesta.json();
      console.log(dato[0]);
      // aqui se modifica el useState
      setPersonaje(dato[0]);
      // mostrar el c omponente frase
      setMostrarSpiner(false);
    } catch (error) {
      console.log(error);
    }
  };
  // condicion logica if, operador ternario ? :
  // (condicion logica)?(logica a ejecutar si cumplo la condicion logica):(logica a ejecutar si no cumplo la condicion logica)
  const mostrarComponente =
    mostrarSpiner === true ? (
      <Spiner></Spiner>
    ) : (
      <Frase personaje={personaje}></Frase>
    );

  return (
    <Card
      style={{ width: "100%" }}
      className="cbody container text-center py-5 px-5"
    >
      <div>
        <Card.Img src={imagenLogo} className="w-75"></Card.Img>
      </div>
      <div>
        <Button className="my-5" variant="warning" onClick={consultarApi}>
          Obtener Frase
        </Button>
      </div>

      {mostrarComponente}
    </Card>
  );
}

export default App;
