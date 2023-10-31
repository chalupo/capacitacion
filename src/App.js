import { Routes, Route } from "react-router-dom"
import './App.css';
import Admin from './componentes/Admin';
import Tabla from './componentes/Tabla';
import Video from './componentes/Video';
import Cuestionario from './componentes/Cuestionario';

function App() {
  return (
      <>
          <Routes>
            <Route path="/" element={ <Tabla /> } />
            <Route path="curso" element={ <Video /> } />
            <Route path="examen" element={ <Cuestionario /> } />
            <Route path="admin" element={ <Admin /> } />
          </Routes>
      </>
  );
}

export default App;
