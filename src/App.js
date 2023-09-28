import logo from './logo.svg';
import './App.css';
import ListaCursos from './componentes/ListaCursos';
import Navegacion from './componentes/Navegacion';
import CursoAdd from './componentes/CursoAdd';

function App() {
  return (
    <>
    <Navegacion/>
      <div className="App">
        <div className='contenedor-principal'>
          <ListaCursos/>
          <CursoAdd/>
        </div>
      </div>
    </>
  );
}

export default App;
