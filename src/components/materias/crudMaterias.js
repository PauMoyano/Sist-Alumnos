import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from 'react-redux';
//import "./crudmaterias.css";
//import swal from 'sweetalert';
import { Button, Table } from 'react-bootstrap';

const CrudMateria = () => {
    const materias =[["Nuevas técnicas de programación","Prof. Ivanna"],["Programación III","Prof. Ramón"],["Inglés técnico","Prof. Nadia"]]
    const cabeceras = ['Nombres','Profesor']
    
    return (
       <div>
           <Link to="/nuevamateria">
           <Button>Nueva Materia</Button>
           </Link>
           <Button>Modificar Materia</Button>
           <div>
           <Table responsive>
              <thead>
                    <tr>
                    <th>#</th>
                     {Array.from({ length: 12 }).map((_, index) => (
                     <th key={index}>{cabeceras[index]}</th>
                      ))}
                    </tr>
              </thead>
              <tbody>
                 {materias.map((materia, index) => {
                    return (
                            <tr>
                            <td>{index +1}</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>{materia[index]}</td>
                             ))}
                            </tr>
                             );
                    })}  
              </tbody>
           </Table>
           </div>
       </div>
                            
    )
};
export default CrudMateria;