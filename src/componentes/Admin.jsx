import ListaCursos from './ListaCursos';
import CursoAdd from './CursoAdd';
import Navegacion from './Navegacion';
import '../css/Admin.css';

function Admin() {
	return(
		<>
			<Navegacion/>
			<div className="contenedor">
				<div className="contenedor-principal">
        			<ListaCursos/>
          		<CursoAdd/>
				</div>
			</div>
		</>
	);
}

export default Admin;