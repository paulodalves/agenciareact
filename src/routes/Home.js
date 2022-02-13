import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import './style.css'
import { Conteudo } from './style';

import Planeta from '../img/planeta.svg'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <main className='pages'>
        <Conteudo>
          <div>
            <img src={Planeta} alt="planeta" />
          </div>
          <div>
            <h2>Destino Certo</h2>
            <p>Venha para a melhor agencia de viagens do país.
              Viage conosco e vivencie suas melhrores esperiências.
            </p>
            <div>
              <Link to="/viagem">Agendar Viagem</Link>
            </div>
          </div>
        </Conteudo>
      </main>
      <Footer />
    </div>
  );
}

export default App;
