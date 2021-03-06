import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurante from './paginas/AdminRestaurante/AdministracaoRestaurante';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path= "/admin/restaurantes" element={<AdministracaoRestaurante/>}/>
    </Routes>
  );
}

export default App;
