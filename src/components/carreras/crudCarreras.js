import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from 'react-redux';
//import "./crudmaterias.css";
//import swal from 'sweetalert';
import { Button, Table } from 'react-bootstrap';

const CrudCarreras = () => {
    const carreras =[["Tecnicatura Superior en Desarrollo de Software","2017"],["Tecnicatura Superior en Robótica","2018"]]
    const cabeceras = ['Carrera','Plan']
    
    return (
       <div>
           <Link to="/nuevacarrera">
           <Button>Nueva Carrera</Button>
           </Link>
           <Button>Modificar Carrera</Button>
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
                 {carreras.map((carrera, index) => {
                    return (
                            <tr>
                            <td>{index +1}</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>{carrera[index]}</td>
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
export default CrudCarreras;