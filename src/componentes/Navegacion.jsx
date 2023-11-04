import React from 'react';
import { Link } from "react-router-dom";
import '../css/Navegacion.css';

function Navegacion(){
	return (
		<nav className='menu'>
			<ul>
				<li><Link to="../" className="active">Inicio</Link></li>
				<li><a href='#'>Iniciar Sesión</a></li>
			</ul>
		</nav>
		);
}

export default Navegacion;