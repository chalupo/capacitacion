import React from "react";
import { Link } from "react-router-dom";
import '../css/Tabla.css';

function Tabla() {
    return (
      <>
        <Link to="curso">Ir al curso </Link>
        <Link to="examen">Ir al examen </Link>
        <Link to="admin">Admin</Link>
        <div className="tabla">
        <h1>Título Página</h1>
        <table>
          <thead>
            <tr>
              <th>Columna 1</th>
              <th>Columna 2</th>
              <th>Columna 3</th>
              <th>Columna 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fila 1, Columna 1</td>
              <td>Fila 1, Columna 2</td>
              <td>Fila 1, Columna 3</td>
              <td>Fila 1, Columna 4</td>
            </tr>
            <tr>
              <td>Fila 2, Columna 1</td>
              <td>Fila 2, Columna 2</td>
              <td>Fila 2, Columna 3</td>
              <td>Fila 2, Columna 4</td>
            </tr>
            <tr>
              <td>Fila 3, Columna 1</td>
              <td>Fila 3, Columna 2</td>
              <td>Fila 3, Columna 3</td>
              <td>Fila 3, Columna 4</td>
            </tr>
            <tr>
              <td>Fila 4, Columna 1</td>
              <td>Fila 4, Columna 2</td>
              <td>Fila 4, Columna 3</td>
              <td>Fila 4, Columna 4</td>
            </tr>
            <tr>
              <td>Fila 5, Columna 1</td>
              <td>Fila 5, Columna 2</td>
              <td>Fila 5, Columna 3</td>
              <td>Fila 5, Columna 4</td>
            </tr>
          </tbody>
        </table>
      </div>
      </>
    );
}


export default Tabla;