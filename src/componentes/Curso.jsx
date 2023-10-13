import React from 'react';
import Boton from './Boton';
import '../css/Curso.css';

function Curso(props){

	const modificarCurso = () =>{
		console.log('modificar curso'+props.nombre);
	}

	const eliminarCurso = () =>{
		var curso = document.getElementById(props.id);
		curso.remove();
	}

	return (
		<div className='contenedor-curso' id={props.id}>
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
				<Boton 
					texto='Modificar Curso'
					esBotonEliminar={false}
					manejarClick={modificarCurso}
				/>
				<Boton 
					texto='Eliminar Curso'
					esBotonEliminar={true}
					manejarClick={eliminarCurso}
				/>
			</div>
		</div>
	);
}

export default Curso;