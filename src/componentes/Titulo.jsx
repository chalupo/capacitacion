import React from 'react';
import '../css/Titulo.css'

function Titulo(props){
	return (
		<h1 className='titulo'>{props.titulo}</h1>
	);
}

export default Titulo;