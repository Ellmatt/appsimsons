import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import imagenLogo from "./img/image.png";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";
import "./Estilo.css";


function App() {
  // aqui va la logica
  
  const [personaje, setPersonaje] = useState({})


  useEffect(() => {
    // siempre pedir api en montaje cuando se la solicite, no en montaje y actualizacion
    consultarApi();
  }, []);

  const consultarApi = async() => {
  //  try cach es para poner codigo en est mas controlada por si hay problemas
    try{
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      console.log(respuesta)
      // json en minuscula es un metodo
      const dato = await respuesta.json()
      console.log(dato[0])
      // aqui se modifica el useState
      setPersonaje(dato[0])
    }catch(error){
      console.log(error)

    }
  };

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

      <Frase personaje={personaje}></Frase>
    </Card>
  );
}

export default App;
