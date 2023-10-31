import React from "react";
import { Link } from "react-router-dom";
import '../css/Tabla.css';

function Tabla() {
    return (
      <>
        <nav className="">
          <ul>
            <li><Link to="curso">Ir al curso </Link></li>
            <li><Link to="examen">Ir al examen </Link></li>
            <li><Link to="admin">Admin</Link></li>
          </ul>
        </nav>
        <div className="tabla">
          <h1>Título Página</h1>
          <table>
            <thead>
              <tr>
                <th>Departamento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seguridad Industrial</td>
                <td><button>Ver Cursos</button></td>
              </tr>
              <tr>
                <td>Ambiental</td>
                <td><button>Ver Cursos</button></td>
              </tr>
              <tr>
                <td>Recursos Humanos</td>
                <td><button>Ver Cursos</button></td>
              </tr>
              <tr>
                <td>Servicio Médico</td>
                <td><button>Ver Cursos</button></td>
              </tr> 
            </tbody>
          </table>
        </div>
      </>
    );
}


export default Tabla;