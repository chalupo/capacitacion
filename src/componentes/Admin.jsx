import ListaCursos from './ListaCursos';
import Navegacion from './Navegacion';
import CursoAdd from './CursoAdd';

function Admin() {
	return(
		<>
			{/*<Navegacion/>*/}
        	<ListaCursos/>
          <CursoAdd/>
		</>
	);
}

export default Admin;