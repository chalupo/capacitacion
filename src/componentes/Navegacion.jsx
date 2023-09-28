import React from 'react';
import '../css/Navegacion.css';

function Navegacion(){
	return (
		<nav className='menu'>
			<ul>
				<li><a className='active' href='#'>Inicio</a></li>
				<li><a href='#'>Iniciar Sesión</a></li>
			</ul>
		</nav>
		);
}

export default Navegacion;