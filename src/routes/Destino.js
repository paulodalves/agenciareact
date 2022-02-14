import { Destinos } from '../tables/Destinos';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import Rio from '../img/rio.jpg'
import Manaus from '../img/manaus.jpg'
import Paulo from '../img/paulista.jpg'
import Minas from '../img/minas.jpg'
import Santa from '../img/balneario.jpg'
import Buenos from '../img/buenos-aires.jpg'


import './style.css';

export default function Destino() {

  const destino = [
    {
      id: 1,
      img: Rio,
      nome: 'Rio de Janiero',
      valor: 220.20,
    },
    {
      id: 2,
      img: Paulo,
      nome: 'São paulo',
      valor: 380.50,
    },
    {
      id: 3,
      img: Minas,
      nome: 'Ouro Preto',
      valor: 150.00,
    },
    {
      id: 4,
      img: Santa,
      nome: 'Balneário Camboriú',
      valor: 400.20,
    },
    {
      id: 5,
      img: Buenos,
      nome: 'Buenos Aires',
      valor: 700.23,
    },
    {
      id: 6,
      img: Manaus,
      nome: 'Manaus',
      valor: 880.60,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pages">
        <h2>Destinos</h2>
        <Destinos destinos={destino} />
      </main>
      <Footer />
    </>
  );
}