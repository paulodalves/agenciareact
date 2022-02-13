import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h1>Destino Certo!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/viagem">Marcar Viagem</Link> |{" "}
        <Link to="/destino">Destinos</Link> |{" "}
        <Link to="/contato">Contato</Link> 
      </nav>
      <Outlet />
    </div>
  );
}