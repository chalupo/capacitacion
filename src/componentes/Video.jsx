import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/Video.css';

function Video() {
    const [videoCompleted, setVideoCompleted] = useState(false);
    const [popupText, setPopupText] = useState('');
  
    const handleVideoEnd = () => {
      setVideoCompleted(true);
    };

    const handlePopupSubmit = () => {
      alert('Información enviada: ' + popupText);
    };
  
    return (
      <>
      <nav className="menu-user">
        <ul>
          <li><img 
              className='logo' 
              src={require(`../img/logo.png`)} 
              alt='Logotipo' /></li>
          <li><Link to="../curso">Ir al curso </Link></li>
          <li><Link to="../examen">Ir al examen </Link></li>
          <li><Link to="../admin">Admin</Link></li>
        </ul>
      </nav>
      <div className="Video">
        <h1>Curso de Toma de Concienca</h1>
        <p>Estatus de visualización del vídeo: <strong>{videoCompleted ? 'Completo' : 'Incompleto'}</strong></p>
        <div className="video-container">
          <video
            controls
            onEnded={handleVideoEnd}
          >
            <source src="ruta_del_video.mp4" type="video/mp4" />
            {/* Agrega aquí la ruta del video en formato MP4 */}
          </video>
        </div>
        {videoCompleted && (
          <div className="popup">
            <h2>Título de la Ventana Emergente</h2>
            <textarea
              rows="4"
              cols="50"
              placeholder="Añade tu texto aquí"
              value={popupText}
              onChange={(e) => setPopupText(e.target.value)}
            />
            <button onClick={handlePopupSubmit} className="boton-ir-examen">Ir al examen</button>
          </div>
        )}
      </div>
      </>
    );
  }
  
  export default Video;