import React from "react";
import { Link } from "react-router-dom";
import '../css/Tabla.css';

function Tabla() {
    return (
      <>
      <nav className="menu-user">
        <ul>
          <li><img 
              className='logo' 
              src={require(`../img/logo.png`)} 
              alt='Logotipo' /></li>
          <li><Link to="curso">Ir al curso </Link></li>
          <li><Link to="examen">Ir al examen </Link></li>
          <li><Link to="admin">Admin</Link></li>
        </ul>
      </nav>
        <div className="tabla">
          <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Departamento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Seguridad Industrial</th>
                <td><button className="btn btn-warning">Ver Cursos</button></td>
              </tr>
              <tr>
                <th>Ambiental</th>
                <td><button className="btn btn-warning">Ver Cursos</button></td>
              </tr>
              <tr>
                <th>Recursos Humanos</th>
                <td><button className="btn btn-warning">Ver Cursos</button></td>
              </tr>
              <tr>
                <th>Servicio Médico</th>
                <td><button className="btn btn-warning">Ver Cursos</button></td>
              </tr> 
            </tbody>
          </table>
        </div>
      </>
    );
}


export default Tabla;