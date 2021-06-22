import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import Pagination from './pagination';
import { Button, Nav } from 'react-bootstrap';
import './home.css'
import CrudCarreras from '../carreras/crudCarreras';
import CrudMaterias from '../materias/crudMaterias';
import ShowAlumnos from '../alumnos/showAlumnos';
import Inscripciones from '../inscripciones/inscripciones';


function Home() {
    //-------------------REDUX-----------------------
    const dispatch = useDispatch();
  
    //--------------------REACT-----------------------
    const [mostrar, setmostrar] = useState([]);
    console.log(mostrar)
    //----------------filtro x name ------------------
 

    //---------------Pagination---------------------
 

//---------------------ORDENAMIENTOS------------------------
/**/
/* <Link to="/nuevo">
          <Button className="btn-addAlumn">Nuevo Alumno</Button>
          </Link>
          */
    return (
        <div>
          <div>
          <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
          <Nav.Link onClick={() => setmostrar("alumnos")}>Alumnos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link onClick={() => setmostrar("carreras")}>Carreras</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link onClick={() => setmostrar("materias")}>Materias</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link onClick={() => setmostrar("inscripciones")}>Inscripciones</Nav.Link>
          </Nav.Item>
          </Nav>
          </div>
          <div>
            {
              mostrar && mostrar === 'carreras' ? <CrudCarreras/>: mostrar === 'alumnos'? <ShowAlumnos/>: mostrar === 'materias'? <CrudMaterias/>: mostrar === 'inscripciones'? <Inscripciones/>:""
            }
          </div>
        </div>
    )
}

export default Home