import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/Cuestionario.css';

function Cuestionario() {
  const [time, setTime] = useState(300); // 300 segundos = 5 minutos
  const [question, setQuestion] = useState("Es el hecho de darse cuenta de un problema o de un asunto, tras haber meditado sobre ello: ");
  const [answers, setAnswers] = useState([
    'a) Toma de conciencia de seguridad', 
    'b) Toma de conciencia', 
    'c) Toma de Decisiones',]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submittedAnswer, setSubmittedAnswer] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      setSubmittedAnswer(selectedAnswer);
    }
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
    <div className="Cuestionario">
      <h1>Examen del curso: "Toma de conciencia"</h1>
      <p className="tiempo">Tiempo Restante: {Math.floor(time / 60)}:{(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}</p>
      <h5>{question}</h5>
      <ul className="respuestas">
        {answers.map((answer, index) => (
          <li
            key={index}
            className={selectedAnswer === index ? 'selected' : 'respuesta'}
            onClick={() => setSelectedAnswer(index)}
          >
            {answer}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmitAnswer} className="responder">Enviar Respuesta</button>
      {submittedAnswer !== null && (
        <h4 className="response">Tu respuesta fue: {answers[submittedAnswer]}</h4>
      )}
    </div>
    </>
  );
}

export default Cuestionario;