import React from 'react';
import '../css/Boton.css';

function Boton({texto, esBotonEliminar, manejarClick}){
	return (
		<button
			className={esBotonEliminar ? 'boton-eliminar':'boton-modificar'}
			onClick={manejarClick}
		>
			{texto}
		</button>
	);
}

export default Boton;