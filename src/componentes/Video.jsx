import React, { useState } from "react";
import '../css/Video.css';

function Video() {
    const [videoCompleted, setVideoCompleted] = useState(false);
    const [popupText, setPopupText] = useState('');
  
    const handleVideoEnd = () => {
      setVideoCompleted(true);
    };

    const handlePopupSubmit = () => {
      // Aquí puedes agregar lógica para manejar la información enviada desde la ventana emergente.
      alert('Información enviada: ' + popupText);
    };
  
    return (
      <div className="Video">
        <h1>Título de la Página</h1>
        <p>Estatus de visualización del vídeo: {videoCompleted ? 'Completo' : 'Incompleto'}</p>
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
            <button onClick={handlePopupSubmit}>Subir Información</button>
          </div>
        )}
      </div>
    );
  }
  
  export default Video;