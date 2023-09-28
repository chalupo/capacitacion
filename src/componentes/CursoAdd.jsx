import React from 'react';
import Titulo from './Titulo';
import '../css/CursoAdd.css';

function CursoAdd(){
	return(
		<>
		<Titulo titulo='Ingresa los datos del nuevo curso'/>
		<div className='contenedor-formulario'>
			<form className='nuevo-curso'>
				<p> Nombre: 
					<input type='text' name='nombre-curso' id='nombre-curso' />
				</p>
				<p> Área: 
					<select name='area-curso' id='area-curso'>
						<option value='seguridad' selected>Seguridad Industrial</option>
						<option value='ambiental'>Ambiental</option>
						<option value='medico'>Servicio Médico</option>
						<option value='rh'>Recursos Humanos</option>
					</select>
				</p>
				<p className='archivo'>Selecciona una imagen:
					<input type='file' name='img' />
				</p>
				<button name='subir'>Añadir Curso</button>
			</form>
		</div>
		</>
	);
}

export default CursoAdd;