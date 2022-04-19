import "./App.css";
import { useState } from "react";

const App = () => {
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]

  const [mensaje, setMensaje] = useState("");
  const [contador, setContador] = useState(0);

  const cambio = () => {
    setContador((e)=>e+1);
    if(contador >= reyesGodos.length-1){
      setContador(0);
    }
    setMensaje(<h2>La aficion principal de <span className="rojo">{reyesGodos[contador].nombre}</span> es <span className="verde">{reyesGodos[contador].aficion}</span>.</h2>)
  }

  return (
    <>
      <button onClick={cambio}>Ver siguiente</button>
      <div>{mensaje}</div>
    </>
  )
}
export default App;