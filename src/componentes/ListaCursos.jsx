import React from 'react';
import Curso from './Curso';
import Titulo from './Titulo';

function ListaCursos(){
	return (
		<>
    	<Curso 
    	id='1'
    	nombre='Sistema Armonizado' 
    	nom='NOM-018-STPS-2015' 
    	imagen='armonizado'
    	area='Seguridad Industrial' />
    	<Curso 
    	id = '2'
    	nombre='Residuos Peligrosos' 
    	nom='NOM-052-SEMARNAT-2005' 
    	imagen='rsp'
    	area='Ambiental' />
    	<Curso 
    	id = '3'
    	nombre='Evacuación de Personal' 
    	nom='NOM-002-STPS-2010' 
    	imagen='evacuacion'
    	area='Seguridad Industrial' />  
    </>
	);
}

export default ListaCursos;