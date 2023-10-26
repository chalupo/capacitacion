import React, { useState, useEffect } from 'react';
import '../css/Cuestionario.css';

function Cuestionario() {
  const [time, setTime] = useState(300); // 300 segundos = 5 minutos
  const [question, setQuestion] = useState('Agrega la pregunta');
  const [answers, setAnswers] = useState([
    'a) Agrega respuesta', 
    'b) Agrega respuesta', 
    'c) Agrega respuesta', 
    'd) Agrega respuesta']);
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
    <div className="Cuestionario">
      <h1>Título de la Página</h1>
      <p>Límite de Tiempo: {Math.floor(time / 60)}:{(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}</p>
      <p>{question}</p>
      <ul>
        {answers.map((answer, index) => (
          <li
            key={index}
            className={selectedAnswer === index ? 'selected' : ''}
            onClick={() => setSelectedAnswer(index)}
          >
            {answer}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmitAnswer}>Enviar Respuesta</button>
      {submittedAnswer !== null && (
        <p className="response">Tu respuesta fue: {answers[submittedAnswer]}</p>
      )}
    </div>
  );
}

export default Cuestionario;
