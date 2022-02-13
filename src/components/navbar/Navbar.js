import { Link } from "react-router-dom";
import './style.css';
import { useState } from "react";

export default function Navbar() {

  const [show, setShow] = useState(false);

  function showSwitch() {
    return setShow(!show)
  }

  return (
  <>
    <div className="navbar">
      <div className="logo">Destino Certo</div>
      <div className={show ? "links active" : "links"}>
        <Link onClick={() => showSwitch()} to="/">Home</Link>
        <Link onClick={() => showSwitch()} to="/viagem">Marcar Viagem</Link>
        <Link onClick={() => showSwitch()} to="/destino">Destinos</Link>
        <Link onClick={() => showSwitch()} to="/contato">Contato</Link>
      </div>
      <div onClick={() => showSwitch()} className={show ? "bars-button active" : "bars-button"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </>
  );
}