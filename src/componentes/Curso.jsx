import React from 'react';
import '../css/Curso.css';

function Curso(props){
	return (
		<div className='contenedor-curso'>
			<img 
			className='imagen-curso' 
			src={require(`../img/${props.imagen}.jpg`)} 
			alt='Foto de Curso' />
			<div className='contenedor-texto-curso'>
				<p className='nombre-curso'>
					<strong>{props.nombre}</strong> {props.nom}
				</p>
				<p className='area-curso'>
					<strong>{props.area}</strong>
				</p>
				<button className='modificar-curso'>Modificar Curso</button>
				<button className='eliminar-curso'>Eliminar Curso</button>
			</div>
		</div>
	);
}

export default Curso;