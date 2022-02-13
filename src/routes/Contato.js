import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

import { Form } from "./form/Form";
import './style.css'

import { Divo } from "./style";

export default function Contato() {

  return (
    <>
      <Navbar />
      <main className="pages">
        <h1 style={{textAlign: "center", padding: "20px"}}>Contato</h1>
        <Divo>
          <Form />
        </Divo>
      </main >
      <Footer />
    </>
  );
}