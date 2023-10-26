import logo from './logo.svg';
import './App.css';
import ListaCursos from './componentes/ListaCursos';
import Navegacion from './componentes/Navegacion';
import CursoAdd from './componentes/CursoAdd';
import Tabla from './componentes/Tabla';
import Video from './componentes/Video';
import Cuestionario from './componentes/Cuestionario';

function App() {
  return (
    <>
    <Navegacion/>
      <div className="App">
        <div className='contenedor-principal'>
          <ListaCursos/>
          <CursoAdd/>
          {/* <Tabla/>
          <Video/>
          <Cuestionario/> */}
        </div>
      </div>
    </>
  );
}

export default App;
